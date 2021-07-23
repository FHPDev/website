import ButtonStyles from "./ButtonStyles"

const Button = ({ children, config, onClick }) => {
    return (
        <ButtonStyles config={config} onClick={onClick}>
            {children}
        </ButtonStyles>
    )
}

export default Button