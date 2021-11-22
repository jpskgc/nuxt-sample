import Test from './index.vue'

export default {
  component: Test,
  title: 'Components/Test'
}

export const Component = () => ({
  components: { Test },
  template: '<Test />',
})
