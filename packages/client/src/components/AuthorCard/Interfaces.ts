import { IGatsbyImageDataExtended } from 'gbimage-bridge';

export interface AuthorCardI {
    author: {
        name: string
        image: {
            asset: {
                gatsbyImageData: IGatsbyImageDataExtended
            }
        }
    }
    tags: [{}]
    date: String
}