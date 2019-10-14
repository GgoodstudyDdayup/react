import React, { Component } from 'react';

class formDemo extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            name: '',
            mail: '',
            remark: '',
            Province: 1
        }
    }
    handlerNameChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p onClick={(e) => {
                    this.setState(preState => {
                        return {
                            remark: Number(preState.remark) + 1
                        }
                    })
                }}>
                    hi {this.state.name} !!
                </p>
                <p>
                    emain to:{this.state.mail}
                </p>
                <p>
                    remark:{this.state.remark}
                </p>
                <p>
                    Province:{this.state.Province}
                </p>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="txtName">用户名：</label>
                                </td>
                                <td>
                                    <input onChange={this.handlerNameChange} type="text" id="txtName" name="name" value={this.state.name}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="txtName">邮箱：</label>
                                </td>
                                <td>
                                    <input onChange={this.handlerNameChange} type="text" id="emailName" name="mail" value={this.state.mail}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="txtRemark">邮箱：</label>
                                </td>
                                <td>
                                    <textarea id="txtRemark" name="remark" value={this.state.remark} onChange={this.handlerNameChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="txtRemark">省：</label>
                                </td>
                                <td>
                                    <select onChange={this.handlerNameChange} name="Province" id="Province" value={this.state.Province}>
                                        <option value="1">北京</option>
                                        <option value="2">上海</option>
                                        <option value="3">广州</option>
                                        <option value="4">深圳</option>
                                        <option value="5">苏州</option>
                                        <option value="6">山西</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                feom
            </div>
        );
    }
}

export default formDemo;