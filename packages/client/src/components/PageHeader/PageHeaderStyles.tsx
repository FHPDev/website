import styled from "styled-components";


const StyledPageHeader = styled.div`
    margin: 2rem 0 4rem;
    border-bottom: 2px solid var(--pGray);
    padding: 4rem 0;

    @media (min-width: 768px) {
        width: 50%;
    }

    p {
        margin: 2rem 1rem 0;
    }
`
export default StyledPageHeader