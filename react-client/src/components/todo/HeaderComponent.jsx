import { Link } from 'react-router-dom'

function HeaderComponent(){
    //TODO: 이거 Home 경로를 로그인했으면 `/welcome/${username}` 으로 이동하게 하려면 어떻게 할지 생각해보기

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href='https://yelm-212.github.io/'>Yelm-212</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/username">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default HeaderComponent