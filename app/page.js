"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [tasks, settasks] = useState([])
  const saveTask = (e) => {
    e.preventDefault()
    settasks([{title, desc}, ...tasks])
    console.log(tasks)
    settitle("")
    setdesc("")
  }
  const deleteTask = (i) => {
    const copyTasks = [...tasks]
    copyTasks.splice(i, 1)
    settasks(copyTasks)
  }
  return (
    <>
    <div className='container mx-auto py-10'>
      <h1 className='text-4xl mb-5'>My ToDoList</h1>
      <form onSubmit={saveTask} className='mb-5'>
        <input type='text' className='px-5 py-3 rounded-full me-3' placeholder='Enter task here' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <input type='text' className='px-5 py-3 rounded-full me-3' placeholder='Enter description here' value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
        <button className='px-5 py-3 w-fit rounded-full'>Add Task</button>
      </form>


      <div>
        <h2 className='font-semibold text-2xl mb-3'>Task Lists:</h2>
        {tasks.length ? null : <div>No Tasks Available</div>}
        <div className='grid grid-cols-3 gap-3'>
        {tasks.map((item, i) => {
            return (
              <div key={i} className='card bg-white p-5 rounded-md'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className='bg-red-500 px-3 py-1 mt-4 rounded-md text-white' onClick={()=>{deleteTask(i)}}>Delete</button>
              </div>
            )
          })}

          </div>
      </div>
    </div>
    </>
  )
}

export default page