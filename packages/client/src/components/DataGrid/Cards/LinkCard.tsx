import { FC } from 'react'
import { Link } from 'gatsby'

import { LinkCardI } from './Interfaces'

const Cards: FC<LinkCardI> = ({ data, cardType }) => {

    return (
        <Link to={`/blog/${data.slug.current}`}>
            <div>
                <p className="h2">{data.title}</p>
            </div>
        </Link>
    )
}

export default Cards