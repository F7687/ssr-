<template>
  <div style="padding:50px; margin-bottom:20px;">
      <div class="tabs">
          <!-- <span 
          v-for="(item, index) in ['新闻', '体育', '娱乐']" 
          :key="index"
          @click="handleClick(index)"
          :class="{ active: current === index }">
              {{ item }}
          </span> -->
          <span v-for="(item,index) in ['The First','The Second','The Third']" :key="index" style="border:1px solid red" @click="tab(index)" :class="{aa:current===index}">
              {{current}}
              {{item}}
          </span>
      </div>

      <div v-show="current === 0">
          <ul>
              <li>中秋将至，</li>
              <li>中秋将至，</li>
              <li>中秋将至，</li>
          </ul>
      </div>

      <div v-show="current===1">
          <ul>
              <li>中国男篮世界杯</li>
              <li>中国男篮世界杯</li>
              <li>中国男篮世界杯</li>
          </ul>
      </div>

      <div v-show="current===2">
          <ul>
              <li>文章离婚</li>
              <li>文章离婚</li>
              <li>文章离婚</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

    data(){
        return {
            // 记录当前的状态
            current: 0
        }
    },
    methods: {
        tab(index){
            console.log(index);
            // console.log(1);
            this.current=index
        }
        // handleClick(index){
        //     // 修改current
        //     this.current = index;
        // }
    }

}
</script>

<style lang="less" scoped>
    .tabs{
        margin-bottom:20px;

        span{
            cursor: pointer;
        }
    }

    .aa{
        color:red;
    }
</style>