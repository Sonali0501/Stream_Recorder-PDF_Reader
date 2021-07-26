import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { FaBars } from "react-icons/fa";

const Nav = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <nav>
            <h1 className="brand">
                <Link to="/">Stream Recorder</Link>
            </h1>
            <div className="links">
                <Link to="/videos">Videos</Link>
                <Link to="/pdfreader">PDF Reader</Link>
            </div>
            <FaBars color="white" size="24px" className="menu-icon" onClick={() => setOpen(!open)} />
            { open &&
                <div className="menu">
                    <Link to="/videos" onClick={() => setOpen(false)}>Videos</Link>
                    <Link to="/pdfreader" onClick={() => setOpen(false)}>PDF Reader</Link>
                </div>
            }
        </nav>
    );
}

export default Nav;