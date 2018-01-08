import { FORM_COMPLETE, FORM_RESET } from '../actions/types'

const INITIAL_STATE = {
    form: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FORM_COMPLETE:
            return { ...state, form: action.payload }
        case FORM_RESET:
            return INITIAL_STATE;
        default:
            return state;

    }
}
