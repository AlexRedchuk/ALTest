import React from "react";

import './ApplyButton.css';

const ApplyButton = ({text}) => {
    return (
        <button className="applyButton">{text}</button>
    )
}

export default ApplyButton;