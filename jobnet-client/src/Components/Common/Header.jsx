import React from "react";

const Header = () => {
    return (
        <>
            <header className="header bg-customColorGrey">
                <div className="logo">
                    <a >
                        <img src="/path/to/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="button">Search</button>
                </div>
                <div className="buttons">
                    <button type="button">Button 1</button>
                    <button type="button">Button 2</button>
                    <button type="button">Button 3</button>
                    <button type="button">Button 4</button>
                    <button type="button">Button 5</button>
                </div>
            </header>
        </>
    );
};

export default Header;