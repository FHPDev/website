import { FC } from "react"
import LinkCards from "./Cards/LinkCard"
import TextCards from "./Cards/TextCard";
import { DataGridI } from "./Interfaces"

const DataGrid: FC<DataGridI> = ({ data, cardType }) => {
    let cards;
    console.log('card data', data)

    switch (cardType) {
        case 'link':
            cards = data.map((post: any) => {
                return <LinkCards data={post} />
            })
            break;

        case 'card':
            cards = data.map((post: any) => {
                return <TextCards data={post} />
            })
            break;
        default:
            cards = null
    }
    return cards
}

export default DataGrid