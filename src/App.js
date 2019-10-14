import React from 'react';
import './App.css';
// import Welcome from './commont/Welcome.'
// import JSXDemo from './commont/jsxDemo'
// import PropDemo from './commont/PropsDemo'
// import ReactLift from './commont/reactLift'
// import Clock from './commont/clock'
// import EventDemo from './commont/envenDemo'
// import NewsList from './commont/newsList'
import FromDemo from './commont/formDemo'
//简单数据绑定
//属性也可以绑定
//{}中可以执行任何的js代码：三元运算，函数调用等。。。
//jsx防注入
//怎么把一个数组值直接显示在页面上


function App() {
  return (
    <div className="App">
      <h1>aicoder.com</h1>
      <hr />

      {/* 函数组件 */}
      {/* <Welcome name='nimamamad'></Welcome> */}
      
      {/* 类组件 */}
      {/* <JSXDemo></JSXDemo> */}

      {/* <PropDemo kk="aicoder.com"></PropDemo> */}

      {/* <ReactLift kk='hahahahah'></ReactLift> */}
      {/* <Clock></Clock> */}
      {/* <EventDemo></EventDemo> */}
      {/* <NewsList></NewsList> */}
      <FromDemo/>
    </div>
  );
}

export default App;
