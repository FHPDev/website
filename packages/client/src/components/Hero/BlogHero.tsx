import { FC } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'

import { BlogHeroI } from './Interfaces'

const BlogHero: FC<BlogHeroI> = ({ image, title, author, tags, date }) => {
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
                    position: 'revert',
                    width: '50%'
                }}
            />
        </StyledBlogHero>
    )
}

export default BlogHero