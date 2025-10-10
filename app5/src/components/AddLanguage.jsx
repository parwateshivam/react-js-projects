import React, { useState } from 'react'
import { languages } from '../data/languages.js'

const AddLanguage = () => {
  let [title, setTitle] = useState("")
  let [scope, setScope] = useState("")
  let [duration, setDuration] = useState("")
  let [difficulties, setDifficulties] = useState("")

  function handleSubmit(e){
    e.preventDefault;

    let newLanguage = {
      title,scope,duration,difficulties
    }

    languages.push(newLanguage)
  }


  return (
    <div className='p-5 bg-black'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-2/4 mx-auto'>
        <input className='p-2 rounded' onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title' value={title} />
        <input className='p-2 rounded' onChange={(e)=>setScope(e.target.value)} type="text" placeholder='scope' value={scope} />
        <input className='p-2 rounded' onChange={(e)=>setDuration(e.target.value)} type="text" placeholder='duration' value={duration} />
        <input className='p-2 rounded' onChange={(e)=>setDifficulties(e.target.value)} type="text" placeholder='difficulties' value={difficulties} />
        <button className='bg-green-500 p-2 rounded'>Add Language</button>
      </form>
    </div >
  )
}

export default AddLanguage