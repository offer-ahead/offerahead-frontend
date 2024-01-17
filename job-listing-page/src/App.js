import React from 'react';
import FilterBar from './components/FilterBar';
import Index from './components/JobList';
import './App.css'; // 确保你有一个App.css文件来样式化你的App
import Header from "./components/Header";
import JobList from "./components/JobList";

const App = () => {
    const handleFilterChange = (event) => {
        // 处理过滤逻辑
        console.log(event.target.value);
    };

    return (
        <div className="App">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Test Button
            </button>

            <Header/>
            <br/>
            <FilterBar onFilterChange={handleFilterChange}/><br/>
            <JobList/>
        </div>
    );
};

export default App;
