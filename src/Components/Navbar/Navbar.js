
import './Navbar.css';
import { ReactComponent as Logo } from '../../img/NSC-logo.svg';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className='ms-5 my-3' >

                                <Logo />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                           
                        </ul>
                        <div className="d-flex text-white me-4" role="search">
                            <a><i className="bi bi-search me-4"></i></a>
                            <a><i className="bi bi-cart3 me-4"></i></a>
                            <a><i className="bi bi-person me-4"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
