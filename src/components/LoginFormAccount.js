
import React from 'react'
import { Field } from 'redux-form'
import { LoginFormInput } from './LoginFormInput';
import { LoginFormLabel } from './LoginFormLabel';

export const LoginFormAccounts = ({ fields, meta: { touched, error } }) => (
    <ul>
        <li>
            <Field
                name="bankAccountsLabel"
                label="Bank Accounts"
                component={LoginFormLabel}
            />
            <button type="button" className="btn-acccount btn btn-default" onClick={() => fields.push({})}>
                + Add Bank Account
                </button>
        </li>
        {fields.map((account, index) =>

            <li key={index}>
                <div className="div-iban-field">
                    <Field
                        name={`${account}.iban`}
                        type="text"
                        placeholder="Iban name"
                        label="Iban name"
                        component={LoginFormInput}
                    />
                    <button type="button" className="btn btn-remove-account" title="Remove Account" onClick={() => fields.remove(index)} >
                        <i className="glyphicon glyphicon-trash"></i>

                    </button>
                </div>
                <Field
                    name={`${account}.bankName`}
                    type="text"
                    placeholder="Bank name"
                    label="Bank name"
                    component={LoginFormInput}
                />
            </li>
        )}
    </ul>
)
