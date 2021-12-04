<template>
  <div>
    {{this.$route.params.id}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Detail extends Vue {
}
</script>