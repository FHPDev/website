import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import StyledBlogHero from './BlogHeroStyles'

const BlogHero = ({ image, title, author }) => {
    console.log(author)
    const bgImage = convertToBgImage(image)
    return (
        <StyledBlogHero>
            <div className="header">
                <div>
                    <h1>{title}</h1>
                    <div><span>{author.name}</span></div>
                </div>
            </div>

            <BackgroundImage
                Tag="div"
                {...bgImage}
                style={{
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    position: 'revert'
                }}
            />

        </StyledBlogHero>
    )
}

export default BlogHero