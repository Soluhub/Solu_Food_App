import React, { useState } from 'react';
import './ToggleButton.css'; // Create a CSS file for styling
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";


function ToggleButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button className={`navbar-toggler ${isActive ? 'active' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
            {isActive ? <RxCross2 className="icon" /> : <RxHamburgerMenu className="icon" />}
        </button>
    );
}

export default ToggleButton;
