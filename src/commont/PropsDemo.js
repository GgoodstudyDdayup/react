import React, { Component } from 'react';
class PropsDemo extends Component {
    //定义组件内部私有的状态（数据）
    //自动合并所有状态，单独进行修改
    constructor(opt){
        super(opt)
        //只有在构造函数中可以直接给state进行数值初始化
        this.state={
            num:0,
            phone:1300808
        }//初始化一个组件自己的状态    
    }
    //小需求：组件渲染到也面上了之后每隔1s中修改一下页面中的num++
    componentDidMount(){
        setInterval(() => {
            //需要依赖之前的状态做相关计算，需要使用下面的这种方法进行修改状态
            this.setState((preState)=>{
                return {num:preState.num + 1}
            })
        }, 1000);
    }
    componentDidUpdate(){
        console.log('update')
    }
    componentWillUpdate(){
        console.log('will update')
    }


    render() {
        return (
            <div>
                <h3>props demo</h3>
                <p>当前组件的属性：kk-{this.props.kk}</p>
                <p>num:{this.state.num}</p>
                <p>phone:{this.state.phone}</p>             
            </div>
        );
    }
}
export default PropsDemo;