import { FC } from "react"
import { PageHeaderI } from "./Interfaces"
import StyledPageHeader from "./PageHeaderStyles"

const PageHeader: FC<PageHeaderI> = ({ title, text }) => {
    return (
        <StyledPageHeader>
            <h1>{title}</h1>
            <p>{text}</p>
        </StyledPageHeader>
    )
}

export default PageHeader