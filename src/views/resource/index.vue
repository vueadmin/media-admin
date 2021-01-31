<template>
  <div class="app-container">
    <el-button
      type="primary"
      @click="hanldeShowResourceDialog"
      style="margin-bottom: 20px"
    >添加资源</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="ID"
        width="95"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column width="150" label="资源名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        label="演唱"
        width="120"
      >
        <template slot-scope="scope">
          {{ scope.row.singer }}
        </template>
      </el-table-column>
      <el-table-column
        label="作者"
        width="120"
      >
        <template slot-scope="scope">
          {{ scope.row.author }}
        </template>
      </el-table-column>
      <el-table-column
        label="资源类型"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column
        label="资源链接"
        width="450"
      >
        <template slot-scope="scope">
          {{ scope.row.url }}
        </template>
      </el-table-column>
      <el-table-column
        label="资源介绍"
      >
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="280">
        <template slot-scope="scope">
          <el-button @click="handleFetchResourcesQrcode(scope.row)" type="primary" size="mini">二维码</el-button>
          <el-button @click="hanleFecthUpdate(scope.row)" type="primary" size="mini">编辑</el-button>
          <el-button @click="handleFecthDelete(scope.row)" type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新增资源"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item
          label="资源名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源简介"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.desc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源地址"
          :label-width="formLabelWidth"
        >
          <el-input
            disabled
            v-model="form.url"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="演唱者"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.singer"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="作者"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.author"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源类型"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.type"
            placeholder="请选择活动区域"
          >
            <el-option
              label="音频"
              value="mp3"
            ></el-option>
            <el-option
              label="视频"
              value="mp4"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
           label="上传资源"
          :label-width="formLabelWidth"
        >
        <el-upload
          class="upload-demo"
          action="http://api.zhangguoheng.cn/resources/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="hanldeCreateResources"
        >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="编辑资源"
      :visible.sync="dialogFormVisibleUpdate"
    >
      <el-form :model="form">
        <el-form-item
          label="资源名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源简介"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.desc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源地址"
          :label-width="formLabelWidth"
        >
          <el-input
            disabled
            v-model="form.url"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="演唱者"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.singer"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="作者"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.author"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="资源类型"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="form.type"
            placeholder="请选择活动区域"
          >
            <el-option
              label="音频"
              value="mp3"
            ></el-option>
            <el-option
              label="视频"
              value="mp4"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisibleUpdate = false">取 消</el-button>
        <el-button
          type="primary"
          @click="hanldeUpdateResources"
        >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="50%">
      <el-image :src="qrcodeUrl"></el-image>
    </el-dialog>
  </div>
</template>

<script>
import { fetchResources, createResources, updateResources, deleteResources, fetchResourcesQrcode } from "@/api/resource";

export default {
  data() {
    return {
      title: '二维码',
      list: null,
      listLoading: true,
      httpUrl: "http://api.zhangguoheng.cn/",
      // httpUrl: "http://lumen.test/",
      form: {
        name: "",
        desc: "",
        type: "",
        url: "",
        author: "",
        singer: ""
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      dialogFormVisibleUpdate: false,
      dialogVisible: false,
      qrcodeUrl: '',
      fileList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file) {
      if (response.code === 200) {
        this.form.url = this.httpUrl + response.data;
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    fetchData() {
      this.listLoading = true;
      fetchResources().then(res => {
        console.log(res);
        this.listLoading = false;
        this.list = res.data;
      })
    },
    hanldeShowResourceDialog() {
      this.form = {
        name: "",
        desc: "",
        type: "",
        url: "",
        author: "",
        singer: ""
      };
      this.dialogFormVisible = true;
    },
    hanldeCreateResources() {
      createResources(this.form).then(res => {
        this.dialogFormVisible = false;
        this.fetchData();
      })
    },
    handleFetchResourcesQrcode(item) {
      this.title = item.name + '/' + item.singer + '/' + item.author + '/' + item.type;
      this.dialogVisible = true;
      let data = {
        name: item.index_id,
        url: item.url
      }
      fetchResourcesQrcode(data).then(res => {
        console.log(res.qrcode);
        this.qrcodeUrl = this.httpUrl + res.qrcode.slice(2, 16);
        console.log(this.qrcodeUrl);
      })
    },
    // 编辑资源
    hanleFecthUpdate(item) {
      this.dialogFormVisibleUpdate = true;
      this.form = item;
    },

    handleFecthDelete(item) {
       this.$confirm('此操作将永久删除该资源, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteResources(item).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.fetchData();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

    },
    // 上传编辑后的资源信息
    hanldeUpdateResources() {
      updateResources(this.form).then(res => {
        this.dialogFormVisibleUpdate = false;
        this.fetchData();
      })
    }
  },
};
</script>

