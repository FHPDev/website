import styled from 'styled-components'

const StyledBlogList = styled.div`

    .blog-list {
        width: 100%;

        li {
            a {
                display: block;
                padding: 3rem 1rem;
                background-color: var(--amethyst);
                color: #fff;
        
                &:not(last-child) {
                    margin-bottom: 4rem;
                }

                &:hover,
                &:focus {
                    transition: all .3s ease-in-out;
                    box-shadow: 0 0 10px rgba(0,0,0, 0.575);
                }
            }

            &:nth-of-type(odd) {
                a {
                    background-color: var(--seagull);
                    color: var(--black);
                }
            }
        }
    }

    .h2 {
        margin: 0;
    }
`

export default StyledBlogList