import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './TodoApp.css'

// This is main application container
export default function TodoApp(){
    return(
        <div className="TodoApp">
            Todo Managing Application
            <BrowserRouter>
                <Routes>
                    <Route path='/' element= { <LoginComponent/> }></Route>
                    <Route path='/login' element= { <LoginComponent/> }></Route>
                    <Route path='/welcome' element= { <WelcomeComponent/> }></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

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

            navigate('/welcome');
        } else {  
            // console.log('Failed');
            setShowErrorMessage(true);
        }
    }

    // function SuccessMessageComponent(){
    //     if (showSuccessMessage){
    //         return(
    //             <div className='successMessage'>Login Success</div>
    //         )
    //     }
    //     return null
    // }
    
    // function ErrorMessageComponent(){
    //     if (showErrorMessage){
    //         return(
    //             <div className='errorMessage'>Login Failed</div>
    //             )
    //     }
    //     return null
    // }

    return(
        <div className="Login">
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



function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Compoonent
        </div>
    )
}