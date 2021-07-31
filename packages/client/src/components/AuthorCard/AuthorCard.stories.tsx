import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthorCard from './AuthorCard'

export default {
  title: 'Containers/AuthorCard',
  component: AuthorCard,
  argTypes: {
    author: {
      name: String
    },
  },
} as unknown as ComponentMeta<typeof AuthorCard>;

const Template: ComponentStory<typeof AuthorCard> = (args) => <AuthorCard {...args} />;

export const BlogCard = Template.bind({});
BlogCard.args = {
  tags: [{
    title: 'tag one'
  }],
  date: new Date(),
  author: {
    name: 'Ralphie Wiggam',
    image: {
      asset: {
        gatsbyImageData: {
          images: {
            fallback: {
              src: 'https://cdn.sanity.io/images/1fg8plz5/production/ea9b986df515de53358ae7fce7d238c7cd9aa070-225x225.jpg?w=225&h=225&auto=format'
            }
          },
          layout: 'constrained',
          width: 100,
          height: 100
        }
      }
    }
  }
};