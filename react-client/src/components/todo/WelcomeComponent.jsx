import { useParams, Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function WelcomeComponent(){

    const authContext = useAuth()
    const username = authContext.username

    const link = `/todos/${username}`

    return(
        <div className="WelcomeComponent">
            <h1> Welcome! {username} </h1>
            <div>
                Manage your todos <Link to={link}>Link</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent