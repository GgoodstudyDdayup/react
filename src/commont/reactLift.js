import React, { Component } from 'react';

class reactLift extends Component {
    //组件开始初始化时候 首先执行 构造函数
    constructor(props) {
        super(props);
        this.state = {
            name: 'laoniu',
            age: 19
        }
    }

    componentWillMount() {
        //组件将要被挂载到页面上，事件结束后，执行render
        console.log('componentWillMount')
    }

    componentDidMount() {
        //组件已经被挂载到页面上
        //此方法用的非常多：一般用于获取后台数据
        setTimeout(() => {
            this.setState({
                age: 20
            })
        }, 1000);
        console.log('componentDidMount')
        
    }

    //父组件修改当前租的属性的时候，会触发此方法执行
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    //组件将会被更新（更新之前）
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate',nextProps,nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>
                <div>{this.state.age} - {this.props.kk}</div>
            </div>
        );
    }
}


export default reactLift;