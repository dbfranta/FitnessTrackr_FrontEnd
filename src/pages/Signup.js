import { registerUser } from "../api" //-Need to add to api
import { useState} from 'react'

const Signup = ({userName, setUserName, userPassword, setUserPassword}) => {

    const [confirmPassword, setConfirmPassword] = useState('');
return (
    <div class="signupPage">
        <form id="registerUser"
                onSubmit={async (event) => {
                event.preventDefault();
                try {
                const results = await registerUser(userName, userPassword);
                console.log(results)
                results.message ?
                alert(results.message)
                : alert(results.error.message)
                } catch (error) {
                    console.error(error);
                } finally {
                } document.getElementById("registerUser").reset()
            }}>
            <fieldset>
                <label><b>Username</b></label>
                <input 
                id="userName" 
                placeholder="Enter Username" 
                onChange={(event) => setUserName(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label><b>Password</b></label>
                <input id="password" 
                placeholder="Enter Password"
                onChange={(event) => setUserPassword(event.target.value)}/>
            </fieldset>
            <fieldset>
                <label><b>Confirm Password</b></label>
                <input id="confirmPassword" 
                placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)}/>
            </fieldset>
            <button 
            disabled={userPassword === confirmPassword 
            && userPassword !== '' 
            && userName !== '' 
            ? false : true}>Signup!</button>
        </form>
    </div>
    )
}

export default Signup