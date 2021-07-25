import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles'
import TypographyStyles from '../src/styles/Typography'

export const decorators = [
  Story => (
    <>
      <TypographyStyles />
      <GlobalStyles />
      <Story />
    </>
  ),
]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}