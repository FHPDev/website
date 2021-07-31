import styled from "styled-components";

const StyledPageHeader = styled.div`
    margin: 0 0 4rem;
    border-bottom: 2px solid var(--pGray);
    padding-bottom: 4rem;

    @media (min-width: 768px) {
        width: 50%;
    }

    p {
        margin: 2rem 1rem 0;
    }
`
export default StyledPageHeader