import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Comp1 = () => {
  let {data,setData} = useContext(DataContext)
  return (
    <div>
      <h1>hello {data}</h1>
      <button onClick={()=>setData(data+1)}>click me !</button>
    </div>
  )
}

export default Comp1