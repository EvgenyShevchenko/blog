import React from "react";

const Header: React.FC = () => {

    return (
        <div className="Header__wrapper">
            <div className="Logo"><a href="/">Conduit</a></div>
            <nav className="Header__nav">
                <ul className="Header__list">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;