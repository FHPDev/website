import styled from "styled-components";

const StyledBlogHero = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media(min-width: 769px) {
        flex-direction: ${props => props.portrait ? 'row' : 'column'}; 
    }

    h1 {
        text-shadow: -3px 4px 7px black;
    }

    .blog-hero_image {
        width: 100%;
        height: auto;

        @media (min-width: 769px) {
            width: ${props => props.portrait ? '50%' : '100%'}; 
            height: calc(100vh - 80px);
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
            padding: 0 4rem 2rem;
            padding-top: ${props => props.portrait ? '50vh' : '160px'};
            width: ${props => props.portrait ? '50%' : '100%'}; 
            height: ${props => props.portrait ? 'calc(100vh - 80px)' : '10vh'}; 
        }
        
        .content-container {
            @media (min-width: 769px) {
                display: flex;
                flex-direction: ${props => props.portrait ? 'column' : 'row'};
                align-items: ${props => props.portrait ? 'column' : 'center'};
                justify-content: space-between;
                width: 100%;
            }
        }
    }
`
export default StyledBlogHero