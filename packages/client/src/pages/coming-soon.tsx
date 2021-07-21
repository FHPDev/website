import styled from 'styled-components'

const DivStyles = styled.div`
    height: 100vh;
    background: radial-gradient( ellipse at top, var(--pGray), var(--amethyst)),
    radial-gradient( ellipse at bottom, var(--pGray), transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: sans-serif;
    color: var(--black);

    h1 {
        font-size: clamp(2.8rem, 3vw, 6.8rem);
        letter-spacing: .2rem;
    }

    p {
        font-size: clamp(1.8rem, 3vw, 2.8rem);
    }
`
const comingSoon = () => {
    return (
        <DivStyles>
            <div>
                <h1>Finding Hair Peace</h1>
                <p>coming soon</p>
            </div>
        </DivStyles>
    )
}

export default comingSoon;