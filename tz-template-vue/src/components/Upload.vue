<template>
  <div class="upload">
    <el-upload v-bind="$attrs" :action="action" :file-list="fileList" :before-upload="handleBeforeUpload"
      :on-success="handleOnSuccess" :on-remove="handleOnRemove" :on-exceed="handleOnExceed">
      <slot>
        <el-button type="primary" size="small">点击上传</el-button>
      </slot>
      <template v-if="$slots.tip" slot="tip">
        <slot name="tip"></slot>
      </template>
    </el-upload>
  </div>
</template>

<script>
// 'https://www-dev.shiguangkey.com/api/file/standardUpload'

export default {
  name: 'upload',
  inheritAttrs: false,
  props: {
    action: {
      type: String,
      default: `${process.env.BASE_API}/upload/uploadFile`,
    },
    fileList: {
      type: Array,
      default() {
        return [];
      },
    },
    limitFileSize: { type: Number },
    fileSizeExceedMsg: {
      type: String,
      default: '上传文件大小不能超过限定大小',
    },
    fileNumExceedMsg: {
      type: String,
      default: '上传文件数量不能超过限定数量',
    },
  },
  methods: {
    handleBeforeUpload(file) {
      let isInLimit = false;
      if (this.limitFileSize) {
        isInLimit = file.size / 1024 / 1024 < this.limitFileSize;
        if (!isInLimit) this.$message.warning(this.fileSizeExceedMsg);
      }
      let result;
      if (this.$attrs['before-upload']) {
        result = this.$attrs['before-upload'](file);
      }
      if (result !== undefined && !result) return false;
      if (this.limitFileSize) return isInLimit;
      return file;
    },
    handleOnSuccess(response, file, fileList) {
      this.$emit('update:fileList', fileList);
      if (this.$attrs['on-success']) {
        this.$attrs['on-success'](response, file, fileList);
      }
    },
    handleOnRemove(file, fileList) {
      this.$emit('update:fileList', fileList);
      if (this.$attrs['on-remove']) {
        this.$attrs['on-remove'](file, fileList);
      }
    },
    handleOnExceed(file, fileList) {
      this.$message.warning(this.fileNumExceedMsg);
      if (this.$attrs['on-exceed']) {
        this.$attrs['on-exceed'](file, fileList);
      }
    },
  },
  // TOFIX: render 函数内 jsx 无法将 this.$attrs 传入 el-upload
  /* eslint-disable no-unused-vars */
  // render(h) {
  //   return (
  //     <div class="upload">
  //       <el-upload action={this.action$} {...this.$attrs}>
  //         {this.$slots.default}
  //         {this.$slots.tip && <template slot="tip">{this.$slots.tip}</template>}
  //       </el-upload>
  //     </div>
  //   );
  // },
};
</script>

