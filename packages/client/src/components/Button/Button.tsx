import ButtonStyles from "./ButtonStyles"

const Button = ({ children, config }) => {
    return (
        <ButtonStyles config={config}>{children}</ButtonStyles>
    )
}

export default Button