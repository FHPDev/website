import styled from "styled-components";

const StyledBlogHero = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media(min-width: 769px) {
        flex-direction: row; 
    }
    .blog-hero_image {
        width: 100%;
        height: 30%;

        @media (min-width: 769px) {
            width: 50%;
            height: 100vh;
            background-position: center;
        }
    }

    .header {
        background-color: var(--black);
        width: 100%;
        height: 30%;
        display: flex;
        padding: 2rem;
        color: var(--seagull);

        @media (min-width: 769px) {
            align-items: flex-end;
            padding: 50vh 2rem 2rem;
            width: 50%;
            height: 100vh;
        }
    }

    h1 {
        color: var(--seagull);
    }
`
export default StyledBlogHero