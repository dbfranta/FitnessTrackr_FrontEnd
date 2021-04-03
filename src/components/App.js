import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect
} from 'react-router-dom'
import {useState} from 'react'

import Home from '../pages/Home';
import Routines from '../pages/Routines';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const App = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('')

    return (
        <Router>
            <div className="app">
            <nav id="navbar">
                    <div>
                        <p id="logo">Fitness Trackr</p>
                        <div id="links">
                            <Link to="/Home">Home</Link>
                            <Link to="/Activities">Activities</Link>
                            <Link to="/Routines">Routines</Link>
                            {!localStorage.getItem('token') ? 
                            <Link to="/Login">Login</Link>
                            : <button id="logOut" onClick={() => {
                                localStorage.clear()
                                setLoggedIn(false)
                                setLoggedInUser('')
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
                    <Route path="/Routines">
                        <Routines />
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