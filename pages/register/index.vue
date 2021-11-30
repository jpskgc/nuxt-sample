<template>
  <RegistrationFormComponent />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RegistrationFormComponent from '~/components/registration-form/index.vue'

@Component({
  components: {
    RegistrationFormComponent
  }
})
export default class Register extends Vue {}
</script>
