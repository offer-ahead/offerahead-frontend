import React from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import './App.css'; // 确保你有一个App.css文件来样式化你的App

const App = () => {
  const handleFilterChange = (event) => {
    // 处理过滤逻辑
    console.log(event.target.value);
  };

  return (
      <div className="App">
        <Header />
        <FilterBar onFilterChange={handleFilterChange} />
        <JobList />
      </div>
  );
};

export default App;
