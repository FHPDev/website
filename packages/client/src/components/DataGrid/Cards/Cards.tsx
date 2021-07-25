import { FC } from 'react'
import { Link } from 'gatsby'

import { CardI } from './Interfaces'

const Cards: FC<CardI> = ({ data, type }) => {

    return (
        <Link to={`./${data.slug.current}`}>
            <div>
                <p className="h2">{data.title}</p>
            </div>
        </Link>
    )
}

export default Cards