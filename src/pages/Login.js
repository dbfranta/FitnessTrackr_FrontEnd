
import { userLogin } from '../api'; 

const Login = ({userName, setUserName, userPassword, setUserPassword, setLoggedIn, setLoggedInUser}) => {    
    return (
        <div className="loginPage">
            <form id="loginForm"
                onSubmit = {async (event) => {
                    event.preventDefault();
                    try {
                        const results = await userLogin(userName, userPassword);
                        //alert(results.data.message)
                        localStorage.setItem('token', results.token)
                        setLoggedIn(true)                                                                   
                    } catch (error) {
                        console.log(error);
                    } finally {                                                                      
                        localStorage.setItem('username', userName)
                        setLoggedInUser(userName)
                        setUserName(userName)
                    } document.getElementById("loginForm").reset()
                }}
            >
            <div className="loginForm">                
                    <label><b>Username</b></label>
                    <input type="text" 
                    placeholder="Enter Username" 
                    name="uname" 
                    required 
                    onChange={(event) => setUserName(event.target.value)}/>             
                    <label><b>Password</b></label>
                    <input type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required 
                    onChange={(event) => setUserPassword(event.target.value)}/>
                    <button type="submit">Login</button>
                    <span className="signUp">Don't have an account? <a href="/Signup">Sign up!</a></span>                             
            </div>
            </form> 
        </div>                
    );
}

export default Login;