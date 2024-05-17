import React from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import Subtitle from "./components/Subtitle";
import Tittle from "./components/Title";
import LogoItem from "./components/LogoItem";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AttentionRules from "./components/AttentionRules"; // 确保你有一个App.css文件来样式化你的App

const App = () => {
  const handleFilterChange = (event) => {
    // 处理过滤逻辑
    console.log(event.target.value);
  };

  return (
      <BrowserRouter>
          <div className="App">
              <Header />

              <Switch>
                <Route path="/add_rules" component={AttentionRules}></Route>{/* 定义 AttentionRules 路由 */}
                <Route path="/">
                    <Tittle />
                    <Subtitle />
                    <LogoItem />
                    <FilterBar onFilterChange={handleFilterChange} />
                    <JobList/>
                </Route>{/* 默认路由 */}
              </Switch>
          </div>
      </BrowserRouter>

  );
};

export default App;
