import styled from 'styled-components'

const StyledSidebar = styled.div`
    border-radius: 10px;
    
    ul {
        display: flex;
        margin-bottom: 2rem;
    }
    
    h2 {
        padding: 1rem 2rem;
    }

    li {
        font-size: 1.4rem;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1rem;

        &:hover,
        &:focus {
            background: var(--cfBlue);
            color: #fff;
        }
    }
`

export default StyledSidebar