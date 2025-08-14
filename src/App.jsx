import './App.css'

function App() {
  const { VITE_STUDENT_ID, VITE_BRANCH } =
    import.meta.env

  return (
    <>
      Hello world!
      <p>Student ID: {VITE_STUDENT_ID}</p>
      <p>Branch: {VITE_BRANCH}</p>
    </>
  )
}

export default App
