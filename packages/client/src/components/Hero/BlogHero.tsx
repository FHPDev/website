import { FC } from 'react'
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BlogHeroI } from './Interfaces'

const BlogHero: FC<BlogHeroI> = ({ image, title, author, tags, date, portrate }) => {
    const rederImage = getImage(image)
    console.log(rederImage)
    return (
        <StyledBlogHero portrate={portrate}>
            <div className="header">
                <div className="content-container">
                    <h1>{title}</h1>
                    <AuthorCard author={author} tags={tags} date={date} />
                </div>
            </div>

            <GatsbyImage
                Tag="div"
                image={rederImage}
                className="blog-hero_image"
            />
        </StyledBlogHero>
    )
}

export default BlogHero