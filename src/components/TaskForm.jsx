import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            desc
        })
        setTitle("")
        setDesc("")
    }
    return (
        <div className="max-w-md mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-zinc-800 p-5 mb-5 rounded-md"
            >
                <h1 className="text-2xl mb-3 text-white font-bold">Crear nueva tarea</h1>
                <input
                    placeholder="Nueva tarea..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    required
                    className="bg-gray-200 p-1 mb-2 w-full"
                />
                <textarea
                    placeholder="Descripcion..."
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    required
                    className="bg-gray-200 p-1 mb-2 w-full"
                />
                <button className="bg-green-700 hover:bg-green-500 px-2 py-1 m-1 rounded-md text-lg text-slate-50">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm