import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect
} from 'react-router-dom'
import {useState} from 'react'

import Home from '../pages/Home';
import Routines from '../pages/Routines';
import MyRoutines from '../pages/MyRoutines';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Activities from '../pages/Activities';

const App = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('')

return (
    <Router>
        <div className="app">
        <nav id="navbar">
            <p id="logo">Fitness Trackr</p>
                <div>
                    
                    <div id="links">
                        <Link to="/Home">Home</Link>
                        <Link to="/Activities">Activities</Link>
                        <Link to="/Routines">Routines</Link>
                        {localStorage.getItem('token') ?
                        <Link to="/MyRoutines">My Routines</Link>
                        : <p></p>}  
                        {!localStorage.getItem('token') ? 
                        <Link to="/Login">Login</Link>
                        : <button id="logOut" onClick={() => {
                            localStorage.clear()
                            setLoggedIn(false)
                            setLoggedInUser('')
                            location.reload()
                        }}>Log Out</button>}
                        <Link to="/Signup">Signup</Link>  
                    </div>
                    {localStorage.getItem('token') ? <div> <p id="loggedInStatus"> Welcome {userName}</p></div>
                    : <p id="loggedInStatus">Not Logged in</p>}
                </div>
            </nav>
            <main>
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Activities">
                    <Activities />
                </Route>
                <Route path="/Routines">
                    <Routines />
                </Route>
                <Route path="/MyRoutines">
                    <MyRoutines />
                </Route>
                <Route path="/Login">
                    <Login userName={userName} 
                    setUserName={setUserName} 
                    userPassword={userPassword} 
                    setUserPassword={setUserPassword}
                    setLoggedIn={setLoggedIn}
                    setLoggedInUser={ setLoggedInUser }/>
                </Route>
                <Route path="/Signup">
                    <Signup userName={userName} 
                    setUserName={setUserName} 
                    userPassword={userPassword} 
                    setUserPassword={setUserPassword}/>
                </Route>
            </main>
        </div>
    </Router>
)
}

export default App;