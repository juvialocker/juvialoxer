<template>
  <Sider hide-trigger class="slide" width="250">
    <div class="image">
      <img style="margin: 0 5px 0 20px;" src="@/assets/logo-icon.png" alt="" srcset="">
      <img src="@/assets/logo-text.png" alt="" srcset="">
    </div>
    <Menu :active-name="activeName" width="auto">
      <MenuItem
        v-for="menu in menus"
        :key="menu.name"
        :name="menu.name"
        :to="{ name: rs.name + '-' + menu.path }"
      >
        <Icon type="ios-paper"></Icon>
        <p class="title">{{ menu.meta.txt }}</p>
      </MenuItem>
      <Submenu v-for="(submenu,index) in submenus" :name="submenu.name" :key="index">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          <p class="title">{{submenu.meta.txt}}</p>
        </template>
        <MenuItem
          v-for="subs in submenu.children"
          :key="subs.name"
          :name="subs.name"
        >{{subs.meta.txt}}</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CustomRC } from "@/helpers/interface";

@Component
export default class SlideMenu extends Vue {
  @Prop() public readonly rs!: CustomRC;

  get menus() {
    return this.rs.children.filter(
      c => !((c.meta && c.meta.noMenu) || c.meta.sub)
    );
  }
  get submenus() {
    return this.rs.children.filter(c => c.meta && c.meta.sub);
  }

  get activeName(): string {
    return this.$route.name!;
  }
}
</script>
<style lang="scss" scoped>
.ivu-layout-sider {
  background: transparent;
  position: relative;
  height: 100%;
}
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 12px;
  left: 17%;
  margin: auto;
}
.title {
  width: 90px;
  text-align: left;
  color: #fff;
}
.slide{
  // width: 16.7vw !important;
  // max-width: 16.7vw !important;
  // min-width: 16.7vw !important;
  background-color: #262A31;
  .image{
    display: flex;
    align-items: center;
    padding: 10px 0 46px;
    img{
      display: block;
    }
  }
}
</style>
