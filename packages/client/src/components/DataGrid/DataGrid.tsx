import { FC } from "react"
import Cards from "./Cards/Cards"
import { DataGridI } from "./Interfaces"

const DataGrid: FC<DataGridI> = ({ data, type }) => {
    return data.map((post: any) => {
        return <Cards data={post} type={type} />
    })

}

export default DataGrid