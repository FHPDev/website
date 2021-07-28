import styled from "styled-components";

const StyledAuthorCard = styled.div`
    display: flex;
    padding: 2rem 0;
    img {
        border-radius: 2rem;
        border: 3px solid var(--cfBlue);
    }

    .metaData {
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;
        font-size: 1.4rem;
        font-weight: 600;
    }
`
export default StyledAuthorCard