
import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router} from "react-router-dom"

function App() {


  return (
    <Router>
     <div>
      <h1>React on Rails</h1>
      <p>Find this appliation laylout client/src/App.jsx</p>
      <NavBar/>
      <AppRoutes/>

     </div>
    </Router>
  )
}

export default App
