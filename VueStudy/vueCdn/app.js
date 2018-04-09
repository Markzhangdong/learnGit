//实例化vue对象
new Vue({
  el:"#vue-app",
  data:{
    name:"mr.zhang",
    website:"https://www.baidu.com",
    tag:"<a href='https://www.baidu.com'>百度</a>",
    age:"27",
    X:0,
    Y:0,
    myage:0,
    A:20,
    B:21,
    error:false,
    success:false
  },
  methods:{
    greet:function(time){
      return "hello"+time+"!"+this.name;
    },
    add:function(){
      this.age++;
      console.log("age++");
    },
    sub:function(){
      this.age--;
      console.log("age--");
    },
    updateXY:function(event){
      console.log(event);
    },
    ADDToA:function(){
      console.log("ADDToA");
      return  this.myage+this.A;

    },
    ADDToB:function(){
      console.log("ADDToB");
      return this.myage+this.B;

    }
  }
});
new Vue({
  el:"#canvas",
  data:{
    name:"mr.zhang",
    website:"https://www.baidu.com",
    tag:"<a href='https://www.baidu.com'>百度</a>",
    age:"27",
    X:0,
    Y:0
  },
  methods:{
    greet:function(time){
      return "hello"+time+"!"+this.name;
    },
    add:function(){
      this.age++;
    },
    sub:function(){
      this.age--;
    },
    updateXY:function(event){
      //console.log(event);
      this.X=event.offsetX;
      this.Y=event.offsetY;
    }
  }
});
//el:elment 需要获取的元素，一定是html中的根容器
//data ：用于数据的存储
//methods ：用于存储方法
