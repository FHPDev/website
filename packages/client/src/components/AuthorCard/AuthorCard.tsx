import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import StyledAuthorCard from './AuthorCardStyles';
import dateFormat from '../../library/dateFormat';

const AuthorCard = ({ author, tags, date }) => {
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