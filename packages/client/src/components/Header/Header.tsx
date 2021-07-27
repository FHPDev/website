import { Link } from "gatsby"
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
                    {/* <button onFocus={handleOnClick} onMouseOver={handleOnClick}>WAZZAP</button> */}
                    <Link to='/blog'>Blog</Link>
                    {/* {subnavOpen && <div className="ballz"> OH HAI</div>} */}
                </nav>

            </div>
        </StyledHeader>)
}

export default Header