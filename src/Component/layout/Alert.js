import React, {useContext} from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

export const Alert = () => {
    const alertContext = useContext(AlertContext);

    const {alert} = alertContext;

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className='fa fa-info-circle'></i>{alert.message}

            </div>
        )
    )
}
