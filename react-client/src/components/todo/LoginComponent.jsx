import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginComponent(){

    const [username, setUsername] = useState("Enter username")

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    const [password, setPassword] = useState("")
    
    function handlePasswdChange(event){
        setPassword(event.target.value);
    }

    const navigate = useNavigate();

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleSubmit(event){

        if (username === 'username' && password === 'password'){
            // console.log('Login Success');
            setShowSuccessMessage(true);

            navigate(`/welcome/${username}`);
        } else {  
            // console.log('Failed');
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            <h1> Login to use Application </h1>
            { showSuccessMessage && <div className='successMessage'>Login Success</div> }
            { showErrorMessage && <div className='errorMessage'>Login Failed</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" 
                    value={password} onChange={handlePasswdChange}/>
                </div>
                <div>
                    <button type="button" name="login"
                    onClick={handleSubmit}>
                        Login
                    </button>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent