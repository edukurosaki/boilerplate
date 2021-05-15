import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  components: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'titulo',
  description: 'descrição'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: '123',
  description: 'descrição002'
}
