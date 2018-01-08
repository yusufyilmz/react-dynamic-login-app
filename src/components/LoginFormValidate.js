import { validateName, validateEmail } from '../utils/index';
import IBAN from 'iban';

const validate = values => {
    const errors = {}

    if (!values.firstName) {
        errors.firstName = "First name is required!";
    }
    else if (!validateName(values.firstName)) {
        errors.firstName = "First name should contain only small and capital letters.";
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required!";
    }
    else if (!validateName(values.lastName)) {
        errors.lastName = "Last name should contain only small and capital letters.";
    }

    if (!values.email) {
        errors.email = "Email is required!";
    }
    else if (!validateEmail(values.email)) {
        errors.email = "Email should be a valid email";
    }


    if (!values.bankAccounts || !values.bankAccounts.length) {
        errors.bankAccountsLabel = 'You should provide at least one back account'
    }
    else {
        const bankAccountsArrayErrors = []
        values.bankAccounts.forEach((account, i) => {
            const accountsErrors = {}
            if (!account || !account.iban) {
                accountsErrors.iban = 'IBAN is Required!';
                bankAccountsArrayErrors[i] = accountsErrors;
            }
            else if (!IBAN.isValid(account.iban)) {
                accountsErrors.iban = 'IBAN should be a valid IBAN!';
                bankAccountsArrayErrors[i] = accountsErrors;
            }
            else {

                values.bankAccounts.forEach((curAccount, curIndex) => {
                    if (curIndex !== i && curIndex < i && curAccount.iban === account.iban) {
                        accountsErrors.iban = 'This IBAN has already been added!';
                        bankAccountsArrayErrors[i] = accountsErrors;
                    }
                })

            }

            if (!account || !account.bankName) {
                accountsErrors.bankName = 'Bank name is Required!';
                bankAccountsArrayErrors[i] = accountsErrors;
            }
        })

        if (bankAccountsArrayErrors.length > 0) {
            errors.bankAccounts = bankAccountsArrayErrors;
        }
    }
    return errors
}

export default validate



