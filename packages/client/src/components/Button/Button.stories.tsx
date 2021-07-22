import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { string } from 'prop-types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    config: string,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  config: 'primary',
  children: 'Button',
};