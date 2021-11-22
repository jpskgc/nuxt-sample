import Sample from './index.vue'

export default {
  component: Sample,
  title: 'Components/Test2'
}

export const Component = () => ({
  components: { Sample },
  template: '<Sample />',
})
