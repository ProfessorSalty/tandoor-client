import { storiesOf } from '@storybook/vue'
import Index from '../pages'

storiesOf('Index', module).add('As a component', () => ({
  components: { Index: Index },
  template: '<Index />',
}))
