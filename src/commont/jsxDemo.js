import React, { Component } from 'react'

const date = Date.now()
const element = (<span>我是牛酒肉</span>)
const tiele = 'nimad'
const num = 9
const dElement = '<h3>dsds</h3>'
const arr = [<div>这是数组中的第一个元素</div>, <div>这是数组中的第二个元素</div>, '<div>这是字符串</div>']
const arrCity = ['北京', '上海', '苏州']
const getDay = (num) => {
    return (
        <div>周{parseInt(num % 7)}</div>
    )
}

class JXSDemo extends Component {
    // constructor(opt) {
    //     super(opt)
    // }
    render() {
        return (
            <div>
                <p>当前的时间是：{date}</p>
                <div id={tiele} className="article"></div>
                <div className="article">{element}</div>
                <div>{getDay(333)}</div>
                <p>{num > 9 ? '666' : 'undefind'}</p>
                <hr />
                <div>{dElement}</div>
                <div>这是数组的展示{arr}</div>
                <div
                >所有的城市
      <ul>
                        {arrCity.map((item, key) => {
                            console.log(key, item)
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default JXSDemo