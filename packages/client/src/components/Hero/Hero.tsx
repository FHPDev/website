import BackgroundImage from 'gatsby-background-image'

const BannerImage = ({ image, children, className }) => {
    const renderedImage = [
        image,
        `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25))`,
    ].reverse()

    return (
        <BackgroundImage
            Tag="div"
            fluid={renderedImage}
            className={className}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                minHeight: 'clamp(34vh, 60vw, 75vh)',
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