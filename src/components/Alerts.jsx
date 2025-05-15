import React from "react";

function Alerts(props) {
    const { alert, setAlerts } = props;
    
    const upperCaseFirst = (word) => {
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }

    const handleClose = () => {
        setAlerts(null); // clear the alert from state
    };

    return (
        alert && 
        <div className={`alert myAlert mt-3 alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{upperCaseFirst(alert.type)}</strong> {alert.msg}

            <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                data-bs-dismiss="alert"
                aria-label="Close"></button>
        </div>
    );
}

export default Alerts;
