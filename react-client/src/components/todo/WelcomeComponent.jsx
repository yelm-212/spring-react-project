import { useParams, Link } from 'react-router-dom'

function WelcomeComponent(){

    const {username} = useParams();
    const link = `/todos`

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