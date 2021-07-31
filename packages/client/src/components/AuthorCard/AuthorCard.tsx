import { FC } from 'react';

import dateFormat from '../../library/dateFormat';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StyledAuthorCard from './AuthorCardStyles';
import TagList from '../TagList/TagList';
import { AuthorCardI } from './Interfaces';

const AuthorCard: FC<AuthorCardI> = ({ author, tags, date }) => {
    const formatedDate = date ? dateFormat(date) : null
    const rederImage = getImage(author.image.asset.gatsbyImageData)
    return (
        <StyledAuthorCard>
            {rederImage && <GatsbyImage
                image={rederImage}
                alt={author.name}
            />}
            <div className="metaData">
                <span>{tags && `Writren By:`} {author.name}</span>
                {formatedDate && <span>{`Posted On: `} {formatedDate}</span>}
                {tags && <TagList tags={tags} root='blog' />}
            </div>
        </StyledAuthorCard>
    )
}

export default AuthorCard;