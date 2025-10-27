import React, { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  function handleChange(e){
    let {name,value} = e.target
    setFormData((prev)=>{
      return {...prev,[name]:value}
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder='enter your name'
          name='name'
          value={formData.name} />

        <input
          onChange={handleChange}
          type="email"
          placeholder='enter your email'
          name='email'
          value={formData.email} />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
