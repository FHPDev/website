import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import { FC } from 'react'
import { HeroI } from './Interfaces'

const BannerImage: FC<HeroI> = ({ image, children, className, filter }) => {
    const bgImage = convertToBgImage(image)
    // const renderedImage = [
    //     ...bgImage,
    //     `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25))`,
    // ].reverse()

    return (
        <BackgroundImage
            Tag="div"
            {...bgImage}
            className={className}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                minHeight: 'clamp(34vh, 60vw, 94vh)',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--white)',
                paddingBottom: 'clamp(2rem, 60vw, 6rem)',
            }}
        >
            {children}
        </BackgroundImage>
    )
}

export default BannerImage