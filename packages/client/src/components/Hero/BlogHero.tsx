import { FC } from 'react'
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'
import Image from 'gatsby-plugin-sanity-image'

import { BlogHeroI } from './Interfaces'

const BlogHero: FC<BlogHeroI> = ({ image, title, author, tags, date, portrate }) => {

    return (
        <StyledBlogHero portrate={portrate}>
            <div className="header">
                <div className="content-container">
                    <h1>{title}</h1>
                    <AuthorCard author={author} tags={tags} date={date} />
                </div>
            </div>

            <Image
                Tag="div"
                {...image}
                className="blog-hero_image"
                style={{
                    objectFit: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'initial',
                }}
            />
        </StyledBlogHero>
    )
}

export default BlogHero