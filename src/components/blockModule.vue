<template lang="pug">
	div.blockModule(
		:style="color"
	)
		div
			Icon(
				color="#fff"
				:class="icon"
				size="24"
				style="padding: 0 15px;"
				)
			p {{title}}
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class toolTitle extends Vue {
  @Prop() public readonly title!: string;
  @Prop() public readonly color!: string;
  @Prop() public readonly icon!: string;
}
</script>
<style lang="scss" scoped>
.blockModule {
  width: 100%;
	padding: 10px;
	margin-bottom: 20px;
	height: 97px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	p{
		font-size: 14px;
		color: #fff;
	}
}
</style>