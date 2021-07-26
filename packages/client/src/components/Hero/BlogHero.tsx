import { FC } from 'react'
import StyledBlogHero from './BlogHeroStyles'
import AuthorCard from '../AuthorCard/AuthorCard'
import Image from 'gatsby-plugin-sanity-image'

import { BlogHeroI } from './Interfaces'
import TagList from '../TagList/TagList'

const BlogHero: FC<BlogHeroI> = ({ image, title, author, tags, date }) => {

    return (
        <StyledBlogHero>
            <div className="header">
                <div>
                    <h1>{title}</h1>
                    <AuthorCard author={author} tags={tags} date={date} />
                    <TagList tags={tags} root='blog' />
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