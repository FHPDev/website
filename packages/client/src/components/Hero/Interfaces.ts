import { IGatsbyImageDataExtended } from 'gbimage-bridge';

export interface BlogHeroI {
    image: IGatsbyImageDataExtended
    title: String
    author: Object
    tags: [String]
    date: String
    portrate: boolean
}

export interface HeroI {
    image: IGatsbyImageDataExtended
    className: String
    filter: Boolean
}