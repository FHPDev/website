import PropTypes from 'prop-types'
import 'normalize.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Typography from '../../styles/Typography'
import Header from '../Header/Header'
import { FC } from 'react'
import { LayoutI } from './Interfaces'

const Layout: FC<LayoutI> = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {process.env.DEV_ENV === 'true' && <Header />}
            <main>
                {children}
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.object,
}

export default Layout