import styled from "styled-components";

const StyledBlogHero = styled.div`
    display: flex;
    align-items: center;

    .header {
        background-color: var(--black);
        width: 50%;
        height: 100vh;
        padding: 2rem;
        display: flex;
        align-items: flex-end;
        padding: 8rem 2rem;
        color: var(--seagull)
    }

    h1 {
        color: var(--seagull);
    }
`
export default StyledBlogHero