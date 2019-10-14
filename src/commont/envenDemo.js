import React, { Component } from 'react';

class envenDemo extends Component {
constructor(pros){
    super(pros)
    //让handeleClick 对象指向一个延迟绑定了单签对象实例的函数
    this.handlerClick = this.handlerClick.bind(this)
}

    handlerClick(e){
        console.log(e)
        console.log(this)
    }
    handlerClick2(e){
        console.log(e)
        console.log(this)
    }
    add(a,b,e){
        console.log(this)
        console.log(a+b)
        console.log(e)
    }
    demoFun = (e)=>{
        console.log(this,e)
    }
    render() {
        return (
            <div>
                <button onClick={console.log(33)}>
                    1.简单按钮事件，不建议使用，每次刷新绑定都会执行js
                </button>
                <button onClick={ (e) =>console.log(111)}>
                    2.简单按钮直接绑定 箭头函数的绑定事件方法
                </button>
                <button onClick={this.handlerClick}>
                    3.直接绑定一个类自己的内部函数
                </button>
                <br/>
                <button onClick={this.handlerClick2.bind(this)}>
                    4.在dom中直接绑定一个类自己的内部函数并设置this
                </button>
                <button onClick={this.add.bind(this,3,4)}>
                    5.给事件传递参数
                </button>
                <button onClick={this.demoFun}>
                    6.给事件传递参数
                </button>
            </div>
        );
    }
}

export default envenDemo;