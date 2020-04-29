<template lang="pug">
  div.tooltitle
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class toolTitle extends Vue {
	@Prop() public readonly title!: string;

}
</script>
<style lang="scss" scoped>
</style>