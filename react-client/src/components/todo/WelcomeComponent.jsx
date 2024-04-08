import { useParams, Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
import axios from 'axios'

function WelcomeComponent(){

    const authContext = useAuth()
    const username = authContext.username

    const link = `/todos/${username}`

    function callHelloWorldApi(){
        axios.get('http://localhost:8080/hello')
        .then( (response) => successfulResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup'))

    }

    function successfulResponse(response){
        console.log(response)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="WelcomeComponent">
            <h1> Welcome! {username} </h1>
            <div>
                Manage your todos <Link to={link}>Link</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldApi}> Hello World! </button>
            </div>
        </div>
    )
}

export default WelcomeComponent