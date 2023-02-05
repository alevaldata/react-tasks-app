import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-5xl font-bold italic w-fit mx-auto my-6">No hay tareas...</h1>
    }
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {tasks.map(task =>
                <TaskCard key={task.id} task={task} />
            )}
        </div>
    )
}


export default TaskList