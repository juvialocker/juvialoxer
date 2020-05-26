<template lang="pug">
  div.echarts_line(
    ref="line"
  )
    
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import echarts from "echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";

@Component({})
export default class echarts_line extends Vue {
  @Prop() public readonly title!: string;
  @Prop() public readonly subTitle!: string;

  public chartDom: any = null;
  public options: any = {
    title: {
      text: this.title,
      textStyle: {
        color: "#333",
        fontSize: 18, // 务必记住设置文字大小只能是数字
        fontWeight: 500
      },
      subtext: this.subTitle,
      subtextStyle: {
        color: "#a1aab2",
        fontSize: 16, // 务必记住设置文字大小只能是数字
        fontWeight: "lighter"
      }
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "sin",
        type: "line",
        // stack: "总量",
        data: [
          0,
          0.8415,
          0.9093,
          0.1411,
          -0.7568,
          -0.9589,
          -0.2794,
          0.657,
          0.9894,
          0.4121,
          -0.544,
          -1.0,
          -0.5366
        ]
      },
      {
        name: "cos",
        type: "line",
        // stack: "总量",
        data: [
          1,
          0.5403,
          -0.4161,
          -0.99,
          -0.6536,
          0.2837,
          0.9602,
          0.7539,
          -0.1455,
          -1,
          -0.8391,
          0.0044,
          0.8439
        ]
      }
    ]
  };
  public mounted() {
    this.init();
  }
  public init() {
    console.log(this.$refs["line"]);
    this.chartDom = echarts.init(this.$refs["line"]);
    this.chartDom.setOption(this.options);
  }
  @Watch("title")
  public pushData(nv, v) {
    console.log(nv);
    console.log(v);

    this.chartDom.setOption(this.options);
  }
}
</script>
<style lang="scss" scoped>
.echarts_line {
  height: 427px;
}
</style>