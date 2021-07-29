import { FC } from "react"

import TextCards from "./Cards/TextCard";
import StyledDataGrid from "./DataGridStyles";
import { DataGridI } from "./Interfaces"

const DataGrid: FC<DataGridI> = ({ data, cardType }) => {
    return (
        <StyledDataGrid cardType={cardType}>
            {data.map(post => {
                return <TextCards data={post} />
            })}
        </StyledDataGrid>
    )
}

export default DataGrid