import TaskForm from "./components/TaskForm"
import TaskList from "./components/TasksList"

function App() {
  return (
    <main>
      <div className="container mx-auto p-4 text-center">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App