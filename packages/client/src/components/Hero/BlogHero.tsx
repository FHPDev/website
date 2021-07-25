import { FC } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'
import Image from 'gatsby-plugin-sanity-image'

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

            <Image
                Tag="div"
                {...image}
                style={{
                    objectFit: 'cover',
                    backgroundPosition: 'right top',
                    backgroundRepeat: 'no-repeat',
                    position: 'initial',
                    width: '50%',
                    height: '100vh'
                }}
            />
        </StyledBlogHero>
    )
}

export default BlogHero