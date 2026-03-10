import { NavLink } from 'react-router-dom'
import logo from '../Images/Sono-Logo-1.svg'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Reservations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Menus
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Restaurant
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Events
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <img
                                src={logo}
                                alt="Logo"
                                width="40"
                                height="40"
                                className="ms-3"
                            />
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Sono Sakuru
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Gift Cards
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                               07 3268 6655
                            </NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
