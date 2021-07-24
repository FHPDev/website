import { Link } from "gatsby"

const Cards = ({ data, type }) => {
    console.log(data)

    return (
        <Link to={`./${data.slug.current}`}>
            <div>
                <p className="h2">{data.title}</p>
            </div>
        </Link>)
}

export default Cards