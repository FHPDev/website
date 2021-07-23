import styled from 'styled-components'

const HomepageBannerStyles = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    color: var(--black);
    padding: clamp(2rem, 3vw, 6rem) clamp(2rem, 3vw, 6rem);
    backdrop-filter: blur(20px);
    color: var(--seagull);

    @media (max-width: 768px) {
        margin: 0 auto;
        text-align: center;
    }

  h1 {
    font-weight: 700;
    text-shadow: -1px -1px 0 var(--amethyst), 1px -1px 0 var(--amethyst), -1px 1px 0 var(--amethyst), 1px 1px 0 var(--amethyst);
  }
`;

export default HomepageBannerStyles;