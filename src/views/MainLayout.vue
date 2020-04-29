<template lang="pug">
  Layout(style="height:100%")
    <router-view />
</template>
<script lang="ts">
import { TOKEN_KEY } from "../config";
import { Vue, Component, Watch } from "vue-property-decorator";
import screenCheck from "@/components/screenCheck.vue";
import smoothScroll from "smooth-scrollbar";
import * as service from "@/service";

@Component({
  components: {
    screenCheck
  }
})
export default class MainLayout extends Vue {
  public username = window.localStorage.getItem("username");
  public winIsShow = false;
  public screenWidth = window.screen.width;
  public screenHight = window.screen.height;
  public visible: boolean = false;
  public logOut() {
    this.visible = true;
  }
  public cancel() {
    this.visible = false;
  }
  public ok() {
    this.visible = false;
    this.$router.push({
      name: "login"
    });
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("username");
  }
  public change(v: boolean) {
    this.visible = v;
  }
  get activeName() {
    return (this.$route.name || "").split("-").shift();
  }

  public mounted() {
    if (this.screenWidth < 1366) {
      this.winIsShow = true;
    }
    window.onresize = () => {
      if (window.screen.width < 1366) {
        this.winIsShow = true;
      }
    };
  }
}
</script>

<style lang="scss" scoped>
.ivu-layout-header {
  background: transparent;
  height: 80px;
  padding: 0;

  .ivu-menu-horizontal {
    line-height: 80px;
    height: 80px;
    display: flex;
    padding: 0 30px;
  }
}

.layout-logo {
  padding: 20px 0;
  box-sizing: border-box;
  min-width: 230px;
}

img.logo {
  width: 107px;
  height: 50px;
  display: block;
}

.avatar {
  position: absolute;
  right: 60px;
  cursor: pointer;
}
.wrap {
  display: flex;
  align-items: center;
  .content {
    height: 30px;
    margin-left: 10px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 30px;
  }
}
.iconfont {
  vertical-align: middle;
  padding-right: 5px;
}
</style>
