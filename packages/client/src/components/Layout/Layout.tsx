import PropTypes from 'prop-types'
import 'normalize.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Typography from '../../styles/Typography'
import Header from '../Header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <Header />
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.object,
}

export default Layout