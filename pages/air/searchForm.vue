<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleSearchTab(item, index)"
        :class="{active: index <1}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <el-form class="search-form-content" ref="form" label-width="80px">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
        v-model="state.departCity"
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="handleDestSelect"
          class="el-autocomplete"
          v-model="state.destCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->
        <el-date-picker type="date" placeholder="请选择日期" style="width: 100%;" @change="handleDate" v-model="state.departDate"></el-date-picker>
      </el-form-item>
      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">搜索</el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
const moment = require('moment');
export default {
  data() {
    return {
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ],
      currentTab: 0,
       restaurants: [],
        state: {
                departCity: "", // 出发城市
                departCode: "", // 出发城市代码
                destCity: "",
                destCode: "",
                departDate: ""
            },
        timeout:  null
    };
  },
  methods: {
    // tab切换时触发
    handleSearchTab(item, index) {
      if(index===1){
        this.$message.warning('暂不支持往返。。。。。。。。')
      }
    },

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
        // console.log(cb);
        if(!value){
            return
        }
        this.$axios({
            url:'/airs/city',
            params:{
                name:value
            }
        }).then((res)=>{
            const {data}=res.data
            // 给数组中每个对象添加value属性
            const newData=[]
            data.forEach((v)=>{
                v.value=v.name.replace('市','')
                newData.push(v)
            })
            console.log(newData);
            cb(newData)
            this.state.departCity=newData[0].value
            this.state.departCode=newData[0].sort
        }).catch((err)=>{
            console.log(err)
        })
      },

    // 目标城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDestSearch(value, cb) {  
      // cb([{ value: 1 }, { value: 2 }, { value: 3 }]);
       console.log(value);
        if(!value){
            return
        }
        this.$axios({
            url:'/airs/city',
            params:{
                name:value
            }
        }).then((res)=>{
          // console.log(res);
            const {data}=res.data
            // 给数组中每个对象添加value属性
            const newData2=[]
            data.forEach((v)=>{
                v.value=v.name.replace('市','')
                newData2.push(v)
            })
            // console.log(newData2);
            cb(newData2)
            //默认选中第一个
            this.state.destCity=newData2[0].value
            this.state.destCode=newData2[0].sort
        }).catch((err)=>{
            console.log(err)
        })
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      console.log('---------------');
      console.log(item);
      this.state.departCity=item.value;
      this.state.departCode=item.sort;
       
    },

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
      console.log('---------------');
      console.log(item);
      this.state.destCity=item.value;
      this.state.destCode=item.sort;

    },

    // 确认选择日期时触发
    handleDate(value) {
      this.state.departDate= moment().format('YYYY-MM-DD') 
      console.log(this.state.departDate);
    },

    // 触发和目标城市切换时触发
    handleReverse() {
      let temp=this.state.destCity
      this.state.destCity=this.state.departCity
      this.state.departCity=temp;
      let temp2 =this.state.destCode
      this.state.destCode=this.state.departCode
      this.departCode=temp2
      
    },

    // 提交表单是触发
    handleSubmit() {
      // 判断表单
      const {departCode,destCode,departDate} =this.state
      if(!departCode){
        this.$message.warning('出发或者到达城市不存在，请在下拉框中选择城市')
        return
      }
      if(!destCode){
        this.$message.warning('出发或者到达城市不存在，请在下拉框中选择城市')
        return
      }
      if(!departDate){
        this.$message.warning('出发或者到达城市不存在，请在下拉框中选择城市')
        return
      }
      console.log(this.state);
      this.$axios({
        url:'/airs',
        params:this.state
      }).then((res)=>{
        console.log('****************');
        console.log(res)
        this.$router.push({
          path:'/air/flights',
          query:this.state
        })
      })
    }
  },
  mounted() {
    //   this.restaurants = this.loadAll();
  }
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>