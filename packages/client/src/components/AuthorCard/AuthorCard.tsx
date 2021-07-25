import { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import dateFormat from '../../library/dateFormat';

import StyledAuthorCard from './AuthorCardStyles';

import { AuthorCardI } from './Interfaces';

const AuthorCard: FC<AuthorCardI> = ({ author, tags, date }) => {
    const authImage = getImage(author.image.asset.gatsbyImageData)
    const formatedDate = date ? dateFormat(date) : null

    return (
        <StyledAuthorCard>
            <GatsbyImage image={authImage} alt='' />
            <div className="metaData">
                <span>{tags && `Writren By:`} {author.name}</span>
                {formatedDate && <span>{`Posted On: `} {formatedDate}</span>}
                {tags && tags.map(tag => {
                    return <span>{tag.title}</span>
                })}
            </div>
        </StyledAuthorCard>
    )
}

export default AuthorCard;