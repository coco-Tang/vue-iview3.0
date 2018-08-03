<template>
<div>
<Modal
    :draggable="true"
    :value="show"
    :title="title"
    @on-ok="ok"
    @on-cancel="cancel">
    <div class="modal-header">
      <div slot="header">{{ title }}</div>
    </div>
    <!-- <slot>弹窗内容</slot> -->
  </Modal>
</div>
  
</template>
<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    title: { type: String, default: "提示" }
  },
  methods: {
    ok () {},
    cancel () {}
  }
}
</script>

