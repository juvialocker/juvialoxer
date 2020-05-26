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
				subTitle="Overview of Latest Month"
			)
		Row(:gutter="16")
			Col(span="12") 
				p.latestTitle Latest Posts 
				div.left(v-for="(item,index) in latestData" :key="index")
					Row(:gutter="16")
						Col(span="4")
							div.leftBox
								img(:src="item.imgSrc")
						Col(span="20")
							div.rightBox()
								p {{item.title}}
								div.content {{item.desc}}
								Row(:gutter="16")
									Col(span="14" )
										Row(:gutter="16")
											Col(span="8")
												Button(size="small" type="error" style="width:50px") Edit
											Col(span="8")
												Button(size="small" type="success" style="width:50px") Publish
											Col(span="8")
												Button(size="small" type="warning" style="width:50px") Delete
									Col(span="10")
										p.date {{item.date}}
			Col(span="12") 
				div.right 
					p Chat Option
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
export default class index extends Vue {
	private latestData: Array<object> = [
		{
			imgSrc: require("@/assets/1.jpg"),
			title: "James Anderson",
			desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. ",
			date:"April 14,2016"
		},
		{
			imgSrc: require("@/assets/2.jpg"),
			title: "James Anderson",
			desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. ",
			date:"May 10,2016"
		},
		{
			imgSrc: require("@/assets/3.jpg"),
			title: "James Anderson",
			desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry. ",
			date:"August 1,2016"
		},
	];
}
</script>
<style lang="scss" scoped>
.index {
	width: 100%;
	min-height: 100vh;
	.echarts{
		background-color: #fff;
		padding: 20px;
		width: 100%;
		height: 100%;
		margin-bottom: 20px;
	}
	.left,.right{
		padding: 20px 20px 10px;
		background-color: #fff;
		p{
			font-size: 14px;
			font-weight: 400;
			text-align: left;
		}
	}
	.latestTitle{
		font-size: 18px;
		font-weight: bold;
		padding: 20px 20px 30px;
		background-color: #fff;
		text-align: left;
	}
	.left{
		.leftBox{
			img{
				width: 50px;
				height: 50px;
				border-radius: 50px;
			}
		}
		.rightBox{
			p{
				font-size: 14px;
				padding-bottom: 10px;
			}
			.content{
				font-size: 14px;
				text-align: left;
				padding-bottom: 15px;
			}
			.date{
				color: #a1aab2;
				line-height: 24px;
			}
		}
	}
}
</style>
