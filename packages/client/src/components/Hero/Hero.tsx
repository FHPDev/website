import { BgImage } from "gbimage-bridge"
import { getImage } from 'gatsby-plugin-image'
import { FC } from 'react'
import { HeroI } from './Interfaces'

const BannerImage: FC<HeroI> = ({ image, children, className, filter }) => {
    const bgImage = getImage(image)
    const renderedImage = [
        bgImage,
        `linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.15))`,
    ].reverse()

    return (
        <BgImage
            image={filter ? renderedImage : bgImage}
            className={className}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                minHeight: 'clamp(34vh, 60vw, 90vh)',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--white)',
                paddingBottom: 'clamp(2rem, 60vw, 6rem)',
            }}
        >
            {children}
        </BgImage>
    )
}

export default BannerImage