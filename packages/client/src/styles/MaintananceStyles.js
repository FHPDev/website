import styled from 'styled-components'

const MaintanceStyles = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at top, var(--pGray), var(--amethyst)),
    radial-gradient(ellipse at bottom, var(--pGray), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--black);

  h1 {
    font-weight: 700;
  }
`;

export default MaintanceStyles;