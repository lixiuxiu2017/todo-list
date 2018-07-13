//创建一个组件，包括组件名称、HTML模板、自定义属性
Vue.component("todo-list",{
    //将 Remove按钮 用实例方法$emit()绑定 remove事件
    template:`<li> {{ title }} <button @click="$emit('remove')">Remove</button></li>`,
    //用props字段将绑定数据传递到组件中，因为组件有自己的作用域
    props: ["title"]
});
// 创建一个Vue实例
var vm = new Vue({
    el: "#v-for-component",
    data: {
        newTodoText:"",
        todos:[
            {id:1,title:"sweep the floor"},
            {id:2,title:"do the dishes"},
            {id:3,title:"read the book"}
        ],
        nextTodoId:4
    },
    methods:{
        // 在todos数组中追加新的元素，同时依赖该数组的DOM列表也会自动响应添加新的项
        addNewTodo: function(){
            this.todos.push({
                id:this.nextTodoId++,  //让序号自动递增
                title:this.newTodoText
            });
            this.newTodoText="";  //将文本框输入的文本清空
        }
    }
});

