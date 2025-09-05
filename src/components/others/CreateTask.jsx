import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const { refreshEmployees } = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskNumber: Date.now(),
      title,
      category,
      taskDate,
      description,
      activeTask: false,
      newTask: true,
      failedTask: false,
      completedTask: false
    }

    const data = JSON.parse(localStorage.getItem('employees')) || []

    let assigned = false
    const updated = data.map(elem => {
      if (assignTo === elem.firstName) {
        assigned = true
        const tasks = Array.isArray(elem.tasks) ? [...elem.tasks, newTask] : [newTask]
        const taskCounts = {
          ...elem.taskCounts,
          new: (elem.taskCounts?.new ?? 0) + 1
        }
        return { ...elem, tasks, taskCounts }
      }
      return elem
    })

    if (!assigned) {
      alert(`No employee found with name "${assignTo}"`)
      return
    }

    localStorage.setItem('employees', JSON.stringify(updated))

    if (typeof refreshEmployees === 'function') refreshEmployees()

    // reset form
    setTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
  }

  // ✅ You were missing this return
  return (
    <form onSubmit={submitHandler} className="bg-[#2c2c2c] p-6 rounded text-white mt-5 mb-6">
      <h2 className="text-lg font-semibold mb-4">Create Task</h2>
      <div className="flex flex-col gap-3 text-white">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded bg-[#1c1c1c] border border-gray-600"
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="p-2 rounded bg-[#1c1c1c] border border-gray-600 [color-scheme:dark]"
        />
        <input
          type="text"
          placeholder="Assign to (firstName)"
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
          className="p-2 rounded bg-[#1c1c1c] border border-gray-600"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-[#1c1c1c] border border-gray-600"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded bg-[#1c1c1c] border border-gray-600"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded mt-2"
        >
          Create Task
        </button>
      </div>
    </form>
  )
}

export default CreateTask
