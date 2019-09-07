<template>
    <div class="recommend">
      
    </div>
</template>
<script>
export default {
    data() {
    return {
      isCollapse: true,
      form: [],
      content: [],
      // 判断3张以上的图片跟3张以下的图片的显示方式
      
        // imgMax3:true,
        // imgMin3:true
    
    };
  },
     methods: {
    // ----------测试------
    // test() {
    //   // console.log(this.form);
    // //   this.content=[]
    // console.log(123);
    // this.$router.push({'detail'})
    // },
    //--------测试end----------
    async init() {
      let res = await this.$axios({ url: "/posts" });
      this.content = res.data.data;
      // console.log('*********************');
      // console.log(this.content);
      // console.log('*********************');
      // for(let i=0;i<this.content.length;i++){
      //   if(this.content[i].images.length>=3){
      //     console.log(this.content[i]);
      //     this.objClass.imgMax3=false;
      //     this.objClass.imgMin3=true;
      //   }
      // }
      // console.log(this.objClass);
    }
  },
    mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res);
      this.form = res.data.data;
    });
    this.init();
  },
  created(){
    this.init()
  }
}
</script>
<style lang="less" scoped>
.recommend {
  border: 1px solid black;
  margin-top: 25px;
  ul {
    li {
      padding-bottom: 15px;
      h4 {
        padding: 15px 0;
      }
      p {
        height: 63px;
        overflow: hidden;
        a {
          color: #777;
        }
      }
      .imgs {
        // display: flex;
        height:150px;
        // overflow: hidden;
        a {
          display: inline-block;

          img {
            width: 220px;
            height: 150px;
          }
         
        }
         a:nth-child(2){
            padding: 0 0px;
          }
      }
    }
  }
}
.imgMax3{
  display:flex;
  flex-direction: column-reverse;
}
.imgMin3{
  display: flex;
  flex-direction: inherit;
}
</style>