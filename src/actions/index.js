import { FORM_COMPLETE, FORM_RESET } from './types';

export const submitForm = (value) => {

    let formResult = JSON.stringify(value ,null, 4 );
    return {
        type: FORM_COMPLETE,
        payload: formResult
    }
}


export const resetForm = () => {

    return {
        type: FORM_RESET,
    }
}
