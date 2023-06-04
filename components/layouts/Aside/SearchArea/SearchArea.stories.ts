import { Story } from '@storybook/vue3'
import SearchArea from './index.vue'

export default {
  title: 'components/SearchArea',
  component: SearchArea,
}

const Template: Story<typeof SearchArea> = () => ({
  components: { SearchArea },
  template: '<SearchArea />',
})

export const Default = Template.bind({})
Default.storyName = 'Increment SearchArea Button'
