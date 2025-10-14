import React, { useState } from 'react'

const AddLanguage = ({ languageData, setLanguageData }) => {

  let [checkUnique, setCheckUnique] = useState(false)

  let [formData, setFormData] = useState({
    title: "",
    scope: [],
    duration: "",
    difficulties: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    setLanguageData((prev) => {
      return [formData, ...prev]
    })

    setFormData({
      title: "",
      scope: [],
      difficulties: "",
      duration: ""
    })
  }

  function handleChange(e) {
    let { name, value } = e.target

    if (name == "scope") {
      value = value.split(",")
      value = value.map((item) => {
        return item.trim()
      });
    }

    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  function handleExist(e) {
    try {
      let { value } = e.target
      let result = languageData.filter((lang, index) => {
        return value.toLowerCase() == lang.title.toLowerCase()
      })
      if (result.length != 0) throw ("duplicate entry")
      setCheckUnique(true)
    } catch (err) {
      console.log(err)
      setCheckUnique(false)
    }
  }

  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-2/4 mx-auto border p-5 rounded shadow'>

        <input onChange={(e) => {
          handleChange(e)
          handleExist(e)
        }} className='p-2 rounded border' name='title' type="text" placeholder='title' value={formData.title} />

        {
          !checkUnique ? <h1 className='font-bold p-2 bg-red-400 text-white'>Title has to be unique !</h1> : null
        }

        <input onChange={handleChange} className='p-2 rounded border' name='scope' type="text" placeholder='scope' value={formData.scope} />
        <input onChange={handleChange} className='p-2 rounded border' name='duration' type="text" placeholder='duration' value={formData.duration} />
        <input onChange={handleChange} className='p-2 rounded border' name='difficulties' type="text" placeholder='difficulties' value={formData.difficulties} />

        <button className='bg-green-500 p-2 rounded' disabled={!checkUnique}>Add Language</button>
      </form>
    </div >
  )
}

export default AddLanguage