<template>
  <div class="home">
    <div class="sidenav-con" :style="{width: shrink ? '60px' : '200px'}">
      <Menu>
        <MenuItem v-for="item in menuList" :key="item.name">{{ item.name }}</MenuItem>
      </Menu>
    </div>
    <div class="main-con" :style="{paddingLeft: shrink ? '60px' : '200px'}">
      <div class="main-header">
        <div class="header">
          <div class="navicon-con">
              <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)', height: '60px'}" type="text" @click="toggleClick">
                <Icon type="md-menu"  size="32"/>
              </Button>
          </div>
          <div class="breadcrumb-con">
            mianbaoxie
          </div>
          <div class="avatar-con">
            用户信息...
          </div>
        </div>
        <div class="tags-con">
          <div class="close-all-tag-con">
            <Dropdown transfer>
              <Button type="primary" size="small">
                  标签选项
                  <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu slot="list">
                  <DropdownItem>关闭所有</DropdownItem>
                  <DropdownItem>关闭其他</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div class="tags-body">
            <Tag 
                type="dot" 
                v-for="item in pageTagsList"
                :key="item.name"
                :name="item.name"
                :closable="true"
                :color="shrink?'default':'primary'"
            >{{ item.title }}</Tag>
          </div>
        </div>
      </div>
      <div class="page-view">
        <router-view></router-view>
      </div>
    </div>
    <!-- <Button v-for="(item,index) in btnArr" :key="index" @click="showModal(item.b)">{{item.a}}</Button> -->
    <!-- <BaseModal :show="modal_show"></BaseModal> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BaseModal from "@/components/BaseModal.vue";

export default {
  name: "home",
  components: {
    BaseModal
  },
  data() {
    return {
      shrink: false,
      
      btnArr: [
        { a: "按钮1", b: 1 },
        { a: "按钮2", b: 2 },
        { a: "按钮3", b: 3 }
      ],
      modal_show: false
    };
  },
  computed: {
    menuList () {
      return this.$store.state.menuList;
    },
    pageTagsList () {
      return this.$store.state.pageOpenedList;

    }
  },
  methods: {
    toggleClick() {
      this.shrink = !this.shrink;
    },
    showModal(id) {
      console.log("modalid", id);
      this.modal_show = true;
    }
  }
};
</script>
<style lang="less" scoped>
.ivu-btn-text:focus {
  box-shadow: none;
}
.home {
  width: 100%;
  height: 100%;
  position: relative;
  // background-color: #000;
  .sidenav-con {
    // width: 200px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    transition: width 0.3s;
  }
  .main-con {
    width: 100%;
    height: 100%;
    transition: padding 0.3s;
    .main-header {
      width: 100%;
      height: 100px;
      .header {
        height: 60px;
        box-shadow: 0 2px 1px 1px rgba(100,100,100,.1);
        .navicon-con {
          height: 100%;
          float: left;
        }
        .breadcrumb-con {
          // width: 100%;
          // position: absolute;
          float: left;
          line-height: 60px;
        }
        .avatar-con {
          width: 300px;
          height: 100%;
          float: right;
          line-height: 60px;
        }
      }
      .tags-con {
        height: 40px;
        background-color: rgba(0, 0, 0, 0.1);
        position: relative;
        .close-all-tag-con {
          width: 110px;
          height: 40px;
          background-color: #fff;
          padding-top: 8px;
          text-align: center;
          position: absolute;
          top: 0;
          right: 0;
          box-shadow: 0 2px 1px 1px rgba(100,100,100,.1) inset;
        }
      }
    }
    .page-view {
      width: 100%;
      height: calc(100% - 100px);
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

 