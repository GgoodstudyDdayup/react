import React, { Component } from 'react';
import axios from 'axios'
class newsList extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            newsList: []
        }
    }
    delete(id) {
        //移除数据
        if (window.confirm('你是否要真的删除吗？')) {
            this.setState(preState => {
                return {
                    newsList: preState.newsList.filter(item => item.id != id)
                }
            })
        }
        // this.setState({
        //     newsList: this.state.newsList.filter(item => item.id != id)
        // }
        // )

    }
    componentDidMount() {
        //发送ajax请求到后台并获取数据
        axios.get('/db.json')
            .then(res => {
                console.log(res.data.news)
                this.setState({ newsList: res.data.news })
            })
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.newsList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <button onClick={this.delete.bind(this, item.id)}>删除</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default newsList;