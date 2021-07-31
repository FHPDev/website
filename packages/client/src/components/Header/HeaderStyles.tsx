import styled from 'styled-components'

const StyledHeader = styled.header`
    display: none;
    
    @media (min-width: 769px) {
        z-index: 10;
        background-color: var(--pGray);
        width: 100%;
        color: var(--black);
        display: flex;
    }

    @supports (backdrop-filter: grayscale(30%)) {
        backdrop-filter: grayscale(100%);
    }

    .header-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 clamp(3rem, 3vw, 6rem);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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