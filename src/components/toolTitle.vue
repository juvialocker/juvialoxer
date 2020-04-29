<template lang="pug">
  div.tooltitle
    div.title Dashboard
    div.right
      Breadcrumb(
        separator="<b class='BSeparator'>=></b>"
      )
        Breadcrumb-item(href="/") {{2}}
        Breadcrumb-item(href="/") {{1}}
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class toolTitle extends Vue {}
</script>
<style lang="scss" scoped>
.tooltitle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .title {
    font-size: 18px;
  }
  .right {
    font-size: 12px;
  }
}
</style>