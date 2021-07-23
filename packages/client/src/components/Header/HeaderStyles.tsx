import styled from 'styled-components'

const StyledHeader = styled.header`
    position: absolute;
    z-index: 10;
    background: rgba(255,255,255,0.24);
    width: 100%;
    color: var(--black);

    .header-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(3rem, 3vw, 6rem);
        width: 100%;
        display: flex;
        justify-content: space-between;
        
    }

    nav {
        font-weight: 600;
        display: flex;
    }

    .ballz {
        position: absolute;
        bottom: -2rem;
    }
`

export default StyledHeader