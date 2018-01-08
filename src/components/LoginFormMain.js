import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { LoginFormInput } from './LoginFormInput';
import { LoginFormAccounts } from './LoginFormAccount';
import validate from './LoginFormValidate';
import { submitForm, resetForm } from '../actions/index';

class LoginFormMain extends Component {

    constructor(self) {
        super(self);
        this.state = {
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginForm) {
            console.log(nextProps.loginForm)
            alert("Form data: \n" + nextProps.loginForm)
            this.props.resetForm();
        }
    }

    submitForm(values) {
        this.props.submitForm(values);
    }

    render() {

        const { handleSubmit } = this.props;
        return (
            <form className="form" onSubmit={handleSubmit(this.submitForm.bind(this))}>
                <h1>Register Accounts</h1>
                <Field
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    label="First name"
                    component={LoginFormInput}
                />
                <Field
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    label="Last name"
                    component={LoginFormInput}
                />
                <Field
                    name="email"
                    type="text"
                    placeholder="Email"
                    label="Email"
                    component={LoginFormInput}
                />
                <FieldArray name="bankAccounts" component={LoginFormAccounts} />
                <div>
                    <button type="submit" className="btn btn-warning">Submit!</button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        loginForm: state.login.form,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (values) => dispatch(submitForm(values)),
        resetForm: () => dispatch(resetForm())

    }
}

export default reduxForm({
    validate,
    form: "LoginForm"
})(connect(mapStateToProps, mapDispatchToProps)(LoginFormMain));
