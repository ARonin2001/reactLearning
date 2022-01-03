
export const required = value => {
    if(!value)
        return "This field is required";
}

export const maxLength = max => value => {
    if(value && value.length > max)
        return `Max length is ${max}`;
}
