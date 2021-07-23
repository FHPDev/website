import styled from 'styled-components'

const HomepageBannerStyles = styled.div`
    @supports (backdrop-filter: blur(20px)) {
      background-color: rgba(136, 96, 208, 0.4);
      backdrop-filter: blur(20px);
    }
    background-color: rgba(136, 96, 208, 0.7);
    padding: clamp(1rem, 3vw, 6rem);

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