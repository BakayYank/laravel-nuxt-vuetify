<template>
  <v-progress-linear
    v-if="show"
    :indeterminate="true"
    :color="color"
    height="4"
  />
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    show: {
      type: [Boolean, String],
      required: true
    },
    color: {
      type: String,
      default: 'accent'
    }
  }
}
</script>

<style lang="stylus" scoped>
.progress-linear
  height: 4px
  left: 0
  margin: 0
  position: absolute
  right: 0
  top: 0
  width: 100%
  z-index: 999999
</style>
