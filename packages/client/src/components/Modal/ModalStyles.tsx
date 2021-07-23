import styled from "styled-components";

const StyledModal = styled.div`
    background-color: var(--white);
    border: 1px solid var(--black);
    border-radius: 20px;
    padding: 2rem;
    z-index: 8;
    left: 0;
    right: 0;
    top: 14vh;
    margin: 0 auto;
    position: fixed;
    width: 40%;
    color: var(--black);
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.4);
    border: 10px solid var(--seagull);

    .modal-close {
        position: absolute;
        right: 2rem;
        width: 40px;
        height: 40px;
        background-color: var(--pictonBlue);
        border: 1px solid var(--cfBlue);
        padding: 9px;
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(0,0,0, 0.34);

        &:after {
            content: 'X';
            font-size: 2.4rem;
            line-height: 1;
            font-weight: 700;
            color: var(--white);
        }

        &:hover,
        &:focus {
            background-color: var(--amethyst);
            border: 1px solid var(--pictonBlue);
            box-shadow: 0 0 14px rgba(0,0,0, 0.54);
            transition: all 0.13s ease-in-out;
        }
    }
`

export default StyledModal;