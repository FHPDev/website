import styled from "styled-components";

const StyledBlogHero = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media(min-width: 769px) {
        flex-direction: ${props => props.portrate ? 'row' : 'column'}; 
    }

    .blog-hero_image {
        width: 100%;
        height: auto;

        @media (min-width: 769px) {
            width: ${props => props.portrate ? '50%' : '100%'}; 
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
            padding: 0 4rem 2rem;
            padding-top: ${props => props.portrate ? '50vh' : '240px'};
            width: ${props => props.portrate ? '50%' : '100%'}; 
            height: ${props => props.portrate ? '100vh' : '10vh'}; 
        }
        
        .content-container {
            @media (min-width: 769px) {
                display: flex;
                flex-direction: ${props => props.portrate ? 'column' : 'row'};
                align-items: ${props => props.portrate ? 'column' : 'center'};
                justify-content: space-between;
                width: 100%;
            }
        }
    }
`
export default StyledBlogHero