
import React from 'react';

export const LoginFormInput = ({ input, placeholder, label, type, meta: { touched, error } }) => (

    <div className="form-group">

        <div className="form-group page-header">
            <h3>{label}</h3>
        </div>
        <input placeholder={placeholder} className="form-control" type={type} {...input} />

        {touched && error &&
            <div className="alert alert-warning">
                <strong>Warning!</strong> {error}
            </div>
        }
    </div>
)
