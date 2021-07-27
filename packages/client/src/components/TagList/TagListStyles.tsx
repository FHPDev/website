import styled from "styled-components";

const StyledTagList = styled.ul`
    li {
        font-size: 1.2rem;
        display: inline-block;
        font-weight: 600;

        a {
            height: 100%;
            padding: .5rem 1rem;
            color: var(--white);
            background-color: var(--amethyst);
            border-radius: 10px;
            text-transform: uppercase;
            transition: all .3s ease-in-out;

            &:hover,
            &:focus {
                animation: pulse 1s;
                box-shadow: 0 0 0 1em rgba(255,255,255,0);
                background-color: var(--seagull);
                color: var(--black);
            }
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 var(--amethyst); }
        }

        &:not(:last-child) {
            margin-right: 1rem;
        }
    }

`

export default StyledTagList