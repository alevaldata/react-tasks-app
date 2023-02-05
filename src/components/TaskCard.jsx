import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-sky-600 text-white py-4 rounded-md">
            <h2 className="text-2xl font-bold my-1 capitalize">{task.title}</h2>
            <p className="text-orange-200 my-3">{task.description}</p>
            <button
                onClick={() => deleteTask(task.id)}
                className="bg-rose-700 hover:bg-rose-500 px-2 py-1 mt-4 rounded-md text-slate-50"
            >
                Eliminar tarea
            </button>
        </div>)
}

export default TaskCard