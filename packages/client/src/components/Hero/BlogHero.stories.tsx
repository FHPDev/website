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

export const blogHeroPortrate = Template.bind({});
blogHeroPortrate.args = {
    image: {
        images: {
            fallback: {
                src: 'https://cdn.sanity.io/images/1fg8plz5/production/48ecf51b3a262b197190bc8900819ee78b032706-1920x736.jpg?w=1920&h=736&auto=format',
            }
        },
        layout: 'constrained',
        width: 100,
        height: 100
    },
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