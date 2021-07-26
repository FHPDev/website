import { FC } from 'react';
import Image from 'gatsby-plugin-sanity-image'
import dateFormat from '../../library/dateFormat';

import StyledAuthorCard from './AuthorCardStyles';

import { AuthorCardI } from './Interfaces';

const AuthorCard: FC<AuthorCardI> = ({ author, tags, date }) => {
    const formatedDate = date ? dateFormat(date) : null

    return (
        <StyledAuthorCard>
            <Image
                {...author.image}
                width={100}
                height={100}
                alt=''
                style={{
                    width: '100px',
                    height: '100px'
                }}
            />
            <div className="metaData">
                <span>{tags && `Writren By:`} {author.name}</span>
                {formatedDate && <span>{`Posted On: `} {formatedDate}</span>}
            </div>
        </StyledAuthorCard>
    )
}

export default AuthorCard;