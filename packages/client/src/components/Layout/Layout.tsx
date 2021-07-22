import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Typography from '../../styles/Typography'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
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