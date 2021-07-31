import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlogHero from './BlogHero'

export default {
    title: 'Containers/Hero/Blog Hero',
    component: BlogHero,
    argTypes: {
        image: String
    },
} as ComponentMeta<typeof BlogHero>;

const Template: ComponentStory<typeof BlogHero> = (args) => <BlogHero {...args} />;

export const blogHeroportrait = Template.bind({});
blogHeroportrait.args = {
    image: {
        images: {
            fallback: {
                src: 'https://cdn.sanity.io/images/1fg8plz5/production/89b72ee41602b90f863df4da38433f349170142c-2552x1442.jpg?w=2552&h=1442&auto=format',
            }
        },
        layout: 'constrained',
        width: 100,
        height: 100
    },

    title: 'Blog Hero',
    portrait: false,
    date: new Date(),
    tags: [{ title: 'tag' }],
    author: {
        name: 'Ralphie Wiggam',
        image: {
            asset: {
                gatsbyImageData: {
                    images: {
                        fallback: {
                            src: 'https://cdn.sanity.io/images/1fg8plz5/production/ea9b986df515de53358ae7fce7d238c7cd9aa070-225x225.jpg?w=225&h=225&auto=format',
                        }
                    },
                    layout: 'constrained',
                    width: 100,
                    height: 100
                }
            }
        }
    }
}