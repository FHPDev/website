import { FC } from "react"
import ButtonStyles from "./ButtonStyles"

import { ButtonI } from './Interfaces'

const Button: FC<ButtonI> = ({ children, config, onClick }) => {
    return (
        <ButtonStyles config={config} onClick={onClick}>
            {children}
        </ButtonStyles>
    )
}

export default Button