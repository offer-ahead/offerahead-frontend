import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import '../JobList.css'; // 确保有 JobList.css 文件
import config from '../config';


const JobList = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // 定义请求后端接口的函数
        const fetchJobs = async () => {
            try {
                const response = await fetch(`${config.API_URL}/joblist`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setJobs(data); // 假设返回的数据是职位列表的数组
            } catch (error) {
                // 处理错误情况，假数据
                console.error("Fetching jobs failed: ", error.message);
                // 模拟从 API 获取数据
                // 这里应该替换成你实际的 API 调用
                const mockData = [
                    { id: 1, company: 'IBM', title: 'Fullstack Developer - Remote',sponsor: 'Yes', location: 'United States', postedDate: 'today' },
                    // ...其他职位数据
                ];
                setJobs(mockData);
            }
        };

        fetchJobs();
    }, []); // 空依赖数组保证只在组件挂载时执行一次

    return (
        <div>
            <div className="job-list-header">
                <div className="header-item">Company</div>
                <div className="header-item">Job</div>
                <div className="header-item">Sponsor</div>
                <div className="header-item">Posted</div>
                <div className="header-item">Applied?</div>
            </div>
            <div className="job-list">
                {jobs.map(job => (
                    <JobListing key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
