import UseNavigation from "../../library/UseNavigation"
import StyledHeader from "./HeaderStyles"

const Header = () => {
    const [subnavOpen, toggler] = UseNavigation()
    const handleOnClick = () => {
        toggler()
        console.log('clicked')
    }
    return (
        <StyledHeader>
            <div className="header-container">
                <p>OH HELOO</p>
                <nav>
                    <button onFocus={handleOnClick} onMouseOver={handleOnClick}>WAZZAP</button>
                    {subnavOpen && <div className="ballz"> MAI BALLZ</div>}
                </nav>

            </div>
        </StyledHeader>)
}

export default Header