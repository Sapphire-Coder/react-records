import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'

const App = () => {
    return (
        <Router>
            <nav>
                <Link to = '/new'>New</Link>
            </nav>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/new' element = {<New />} />
            </Routes>
        </Router>
    )
}

export default App