
const InputError = ({messagesList}) => {
    return messagesList
    ? Object.entries(messagesList).map(([type, message]) => (
        <p className={"inputError"} key={type}>{message}</p>
    ))
    : null;
}

export default InputError;