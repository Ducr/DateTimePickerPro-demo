<template>
  <div id="app">
    <h1 style="margin-bottom: 50px">DateTimePickerPro Demo</h1>
    <div style="margin-bottom: 50px">
      el-time-picker：
      <el-time-picker
        v-model="singleTimeEl"
        placeholder="请选择时间"
        :custom-minute-step="20"
        :custom-second-step="10"
      />
      <el-time-picker
        v-model="multipleTimeEl"
        is-range
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      />
    </div>
    <div style="margin-bottom: 50px">
      date-time-picker-pro（无步距）：
      <!-- 单个日期时间 -->
      <date-time-picker-pro
        v-model="singleDateTime"
        type="datetime"
        placeholder="选择日期时间"
        default-time="06:00:00"
        value-format="yyyy/MM/dd HH:mm:ss"
        format="yyyy/MM/dd HH:mm:ss"
      />
      <!-- 日期时间范围 -->
      <date-time-picker-pro
        v-model="multipleDateTime"
        type="datetimerange"
        :default-time="['09:00:00', '19:00:00']"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy/MM/dd HH:mm:ss"
        format="yyyy/MM/dd HH:mm:ss"
      />
    </div>
    <div style="margin-bottom: 50px">
      date-time-picker-pro（自定义步距）：
      <!-- 单个日期时间 -->
      <date-time-picker-pro
        v-model="singleDateTime1"
        type="datetime"
        placeholder="选择日期时间"
        default-time="06:00:00"
        :custom-minute-step="20"
        :custom-second-step="10"
        value-format="yyyy/MM/dd HH:mm:ss"
        format="yyyy/MM/dd HH:mm:ss"
      />
      <!-- 日期时间范围 -->
      <date-time-picker-pro
        v-model="multipleDateTime1"
        type="datetimerange"
        :default-time="['09:00:00', '19:00:00']"
        :custom-minute-step="30"
        :custom-second-step="15"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy/MM/dd HH:mm:ss"
        format="yyyy/MM/dd HH:mm:ss"
      />
    </div>
    <!-- <div style="margin-bottom: 50px">
      time-picker-pro（无步距）：
      <time-picker-pro
        v-model="singleTime"
        placeholder="请选择时间"
      />
      <time-picker-pro
        v-model="multipleTime"
        is-range
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      />
    </div>
    <div style="margin-bottom: 50px">
      time-picker-pro（自定义步距+使用滚动）：
      <time-picker-pro
        v-model="singleTime1"
        placeholder="请选择时间"
        :custom-minute-step="20"
        :custom-second-step="10"
      />
      <time-picker-pro
        v-model="multipleTime1"
        is-range
        :custom-minute-step="20"
        :custom-second-step="10"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      />
    </div>
    <div style="margin-bottom: 50px">
      time-picker-pro（自定义步距+使用箭头）：
      <time-picker-pro
        v-model="singleTime2"
        arrow-control
        placeholder="请选择时间"
        :custom-minute-step="20"
        :custom-second-step="10"
      />
      <time-picker-pro
        v-model="multipleTime2"
        is-range
        arrow-control
        :custom-minute-step="20"
        :custom-second-step="10"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      singleTimeEl: '',
      multipleTimeEl: [new Date(2025, 10, 31, 8, 40), new Date(2025, 10, 30, 18, 40)],
      singleDateTime: '',
      multipleDateTime: [],
      singleDateTime1: '',
      multipleDateTime1: [],
      singleTime: '',
      multipleTime: [],
      singleTime1: '',
      multipleTime1: [],
      singleTime2: '',
      multipleTime2: [],
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-date-editor + .el-date-editor {
  margin-left: 20px;
}
</style>
