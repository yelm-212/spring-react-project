import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

// This is main application container
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element= { <LoginComponent/> } />
                    <Route path='/login' element= { <LoginComponent/> } />
                    <Route path='/welcome/:username' element= { <WelcomeComponent/> } />
                    <Route path='/todos/:username' element= { <ListTodosComponent/> } />
                    <Route path='*' element= { <ErrorComponent/> } />
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

            navigate(`/welcome/${username}`);
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


function WelcomeComponent(){

    const {username} = useParams();

    return(
        <div className="WelcomeComponent">
            <h1> Welcome! {username} </h1>
            Welcome Component
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h2> Page doesn't exists </h2>
            <div> Contact Admin </div>
        </div>
    )
}

function ListTodosComponent(){
    const todos = [
                    {id : 1, description: 'Learn React'},
                    {id : 2, description: 'Learn Cloud'},
                    {id : 3, description: 'Make Fullstack Project'}
                ]

    return(
        <div className="ListTodosComponent">
            <h2> Todo Lists </h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id </td>
                            <td>description </td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key = {todo.id} >
                                    <td> {todo.id} </td>
                                    <td> {todo.description} </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table> 
            </div>
        </div>
    )
}