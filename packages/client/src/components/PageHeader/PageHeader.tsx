import StyledPageHeader from "./PageHeaderStyles"

const PageHeader = ({ title, text }) => {
    return (
        <StyledPageHeader>
            <h1>{title}</h1>
            <p>text</p>
        </StyledPageHeader>
    )
}

export default PageHeader