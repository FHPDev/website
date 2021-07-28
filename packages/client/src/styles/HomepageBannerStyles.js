import styled from 'styled-components'

const HomepageBannerStyles = styled.div`
    @supports (backdrop-filter: blur(20px)) {
      background-color: rgba(136, 96, 208, 0.4);
      backdrop-filter: blur(20px);
    }
    background-color: rgba(136, 96, 208, 0.7);
    padding: clamp(1rem, 6vw, 6rem);
    margin-top: 7.7rem;
    border-top: 1px solid var(--black);
    border-right: 1px solid var(--black);
    border-bottom: 1px solid var(--black);

    @media(min-width: 768px) {
      width: clamp(56vw);
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        text-align: center;
    }

  h1 {
    font-weight: 700;
    font-size: clamp(4.6rem, 6vw, 10rem);
    text-shadow: -1px -1px 0 var(--amethyst), 1px -1px 0 var(--amethyst), -1px 1px 0 var(--amethyst), 1px 1px 0 var(--amethyst);
  }
`;

export default HomepageBannerStyles;