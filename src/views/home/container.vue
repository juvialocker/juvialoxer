<template lang="pug">
  Layout(style="flex-direction: row")
    div
      SlideMenu(
        :rs="rs"
      )
    div(
      style="width:100%"
    )
      div.layout-header
        div
          div.left
            Icon(
              @click="toggleClick"
              color="#fff"
              class="iconfont icon-caidan"
              size="24"
            )
            Select(
              v-model="modelCharacter" 
              clearable
              style="width:260px;marginLeft:30px"
            ) 
              Option(
                v-for="item in characterList" 
                :key="item.value"
                :value="item.value"
              ) {{ item.label }}
          div.right
            Icon(
              color="#fff"
              class="iconfont icon-lingdang"
              size="24"
              style="padding: 0 15px;"
            )
            Icon(
              color="#fff"
              class="iconfont icon-review"
              size="24"
              style="padding: 0 15px;"
            )
            Icon(
              color="#fff"
              class="iconfont icon-touxiang"
              size="24"
              style="padding: 0 15px;"
            )
      Content.container-content
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"/>
</template>
<script lang="ts">
import rs from "./router";
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import SlideMenu from "@/components/SlideMenu.vue";

@Component({
  components: {
    SlideMenu
  }
})
export default class Container extends Vue {
  private rs = rs;
  public characterList: Array<object> = [
    { value: "Juvia Lockser", label: "Juvia Lockser" },
    { value: "Tenma Gabriel White", label: "Tenma Gabriel White" },
    { value: "Tsukinose Vignette April", label: "Tsukinose Vignette April" },
    {
      value: "Kurumizawa Satanichia McDowell",
      label: "Kurumizawa Satanichia McDowell"
    },
    { value: "Shiraha Raphiel Ainsworth", label: "Shiraha Raphiel Ainsworth" }
  ];
  public modelCharacter: string = "Juvia Lockser";
  public spanLeft: number = 4;
  public spanRight: number = 20;
  public toggleClick() {
    if (this.spanLeft === 4) {
      this.spanLeft = 2;
      this.spanRight = 22;
    } else {
      this.spanLeft = 4;
      this.spanRight = 20;
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  width: 100%;
  height: 55px;
  background: #141619;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  & > div {
    height: 55px;
    line-height: 55px;
    text-align: left;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
  }
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
  
}
</style>
