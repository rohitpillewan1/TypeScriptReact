
import './App.css'
import UseUserContext from './Context/useUserContext'
import UserDisplay from './Component/UserDisplay'

function App() {
 

  return (
    <>
      <UseUserContext>
        <UserDisplay />
      </UseUserContext>
    </>
  )
}

export default App
