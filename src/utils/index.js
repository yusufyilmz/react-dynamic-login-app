export const validateName = (name) => {
    var nameRegex = /^[a-zA-Z\-]+$/;
    if (name.match(nameRegex) == null) {
        return false;
    }
    return true
}


export const validateEmail = (name) => {
    var nameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.match(nameRegex) == null) {
        return false;
    }

    return true
}