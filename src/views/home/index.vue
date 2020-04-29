<template lang="pug">
	div.index
		ToolTitle
		div.block
			Row(:gutter="16")
				Col(span="4")
					blockModule(
						title="Dashboard"
						color="backgroundColor:#27a9e3"
						icon="iconfont icon-dashboard"
					)
				Col(span="8")
					blockModule(
						title="Charts"
						color="backgroundColor:#28b779"
						icon="iconfont icon-charts_line"
					)
				Col(span="4")
					blockModule(
						title="Widgets"
						color="backgroundColor:#ffb848"
						icon="iconfont icon-widgets"
					)
				Col(span="4")
					blockModule(
						title="Tables"
						color="backgroundColor:#da542e"
						icon="iconfont icon-table-solid"
					)
				Col(span="4")
					blockModule(
						title="Full Width"
						color="backgroundColor:#2255a4"
						icon="iconfont icon-full_width_view"
					)
			Row(:gutter="16")
				Col(span="8")
					blockModule(
						title="Forms"
						color="backgroundColor:#da542e"
						icon="iconfont icon-forms"
					)
				Col(span="4")
					blockModule(
						title="Buttons"
						color="backgroundColor:#2255a4"
						icon="iconfont icon-Buttons"
					)
				Col(span="4")
					blockModule(
						title="Elements"
						color="backgroundColor:#27a9e3"
						icon="iconfont icon-chemical_element"
					)
				Col(span="4")
					blockModule(
						title="Calnedar"
						color="backgroundColor:#28b779"
						icon="iconfont icon-calendar-line"
					)
				Col(span="4")
					blockModule(
						title="Errors"
						color="backgroundColor:#ffb848"
						icon="iconfont icon-error"
					)
		div.echarts
			echart_line(
				title="Site Analysis"
			)
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import ToolTitle from "@/components/toolTitle.vue";
import blockModule from "@/components/blockModule.vue";
import echart_line from "@/components/echart_line.vue";

@Component({
	components: {
		ToolTitle,
		blockModule,
		echart_line,
	}
})
export default class index extends Vue {}
</script>
<style lang="scss" scoped>
.index {
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	padding: 0 30px;
	.echarts{
		width: 100%;
		height: 100%;
	}
}
</style>
