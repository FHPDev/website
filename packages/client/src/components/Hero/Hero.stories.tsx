import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomepageBannerStyles from '../../styles/HomepageBannerStyles'
import Hero from './Hero'

export default {
    title: 'Containers/Hero/Main Hero',
    component: Hero,
    argTypes: {
        image: String
    },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HomepageHero = Template.bind({});
HomepageHero.args = {
    children: <HomepageBannerStyles>
        <h1>Finding Hair Peace</h1>
        <p>We don't have a brig. Why am I sticky and naked? Did I miss something fun? You, a bobsleder!? That I'd like to see! In our darkest hour, we can stand erect, with proud upthrust bosoms. Eeeee! Now say "nuclear wessels"!</p>
    </HomepageBannerStyles>,
    image: {
        images: {
            fallback: {
                src: 'https://cdn.sanity.io/images/1fg8plz5/production/48ecf51b3a262b197190bc8900819ee78b032706-1920x736.jpg?w=1920&h=736&auto=format',
            }
        },
        layout: 'constrained',
        width: 100,
        height: 100
    }
}

export const HeroFiltered = Template.bind({});
HeroFiltered.args = {
    children: <HomepageBannerStyles>
        <h1>Finding Hair Peace</h1>
        <p>We don't have a brig. Why am I sticky and naked? Did I miss something fun? You, a bobsleder!? That I'd like to see! In our darkest hour, we can stand erect, with proud upthrust bosoms. Eeeee! Now say "nuclear wessels"!</p>
    </HomepageBannerStyles>,
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
    filter: true
}