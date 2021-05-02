import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  components: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
)
