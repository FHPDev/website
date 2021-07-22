import styled from 'styled-components'
import { ButtonStylesI } from './Interfaces'

const ButtonStyles = styled.button<ButtonStylesI>`
    background-color: ${props => props.config === 'primary' && 'var(--amethyst)'};
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    padding: 2rem;
    color: var(--white);
    border-radius: var(--radius);
`

export default ButtonStyles