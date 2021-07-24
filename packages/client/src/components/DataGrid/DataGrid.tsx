import Cards from "./Cards/Cards"

const DataGrid = ({ data, type }) => {
    return data.map(post => {
        return <Cards data={post} type={type} />
    })

}

export default DataGrid