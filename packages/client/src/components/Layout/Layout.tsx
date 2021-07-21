import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css'
import GlobalStyles from '../../styles/GlobalStyles'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
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