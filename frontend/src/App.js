import './App.css'
import Home from './Home/Home'
import Add from './components/Add/Add'
import Edit from './components/Edit/Edit'
import View from './components/View/View'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
      <Home/>
      <Routes>
        <Route exact path="/" element={<View/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
