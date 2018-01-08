import React from 'react';

export const LoginFormLabel = ({ label, meta: { touched, error } }) => (

    <div className="form-group page-header">
        <h1>{label}</h1>
        {touched && error &&
            <div className="alert alert-warning">
                <strong>Warning!</strong> {error}
            </div>
        }
    </div>
)

