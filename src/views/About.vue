<template>
  <Modal
    :value="value"
    @on-ok="ok"
    @on-cancel="cancel">
    <div class="modal-header">
      <div slot="header"></div>
    </div>
    <slot>弹窗内容</slot>
  </Modal>
</template>
<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  }
}
</script>

