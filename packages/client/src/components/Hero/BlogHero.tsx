import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'

const BlogHero = ({ image, title, author, tags, date }) => {

    const bgImage = convertToBgImage(image)

    return (
        <StyledBlogHero>
            <div className="header">
                <div>
                    <h1>{title}</h1>
                    <AuthorCard author={author} tags={tags} date={date} />
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