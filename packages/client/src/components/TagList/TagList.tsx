import { Link } from 'gatsby'
import StyledTagList from './TagListStyles'

const TagList = ({ tags, root }) => {
    return (
        <StyledTagList aria-label="tag list">
            {tags.map(tag => {
                return (
                    <li>
                        <Link to={`/${root}/${tag.title}`}>{tag.title}</Link>
                    </li>
                )
            })}
        </StyledTagList>
    )
}

export default TagList