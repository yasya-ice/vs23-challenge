const Button = (props) => {
    return (
        <button className="text-button" type={props.type || 'button'} onClick={props.onClick}
        disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button