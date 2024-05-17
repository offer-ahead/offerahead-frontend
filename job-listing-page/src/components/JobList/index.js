import React, { useState, useEffect } from 'react';
import JobListing from '../JobListing';
import './JobList.css'; // 确保有 JobList.css 文件
import config from '../../config';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1); // 新增一个状态来跟踪当前页码

    const fetchJobs = async (pageNum) => {
        try {
            const response = await fetch(`${config.API_MARKET_URL}/joblist?page=${pageNum}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data; // 直接返回获取的数据
        } catch (error) {
            console.error("Fetching jobs failed: ", error.message);
            return [
                { id: 1, company: 'IBM', title: 'Fullstack Developer - Remote', sponsor: 'Yes', location: 'United States', postedDate: 'today' },
                { id: 2, company: 'Google', title: 'Fullstack Developer - Remote', sponsor: 'Yes', location: 'United States', postedDate: 'today' },
                { id: 3, company: 'Apple', title: 'Fullstack Developer - Remote', sponsor: 'Yes', location: 'United States', postedDate: 'today' },
            ]; // 出错时返回空数组
        }
    };

    useEffect(() => {
        fetchJobs(page)
            .then(newJobs => {
                setJobs(jobs => [...jobs, ...newJobs]); // 追加新加载的职位
            });
    }, [page]); // 当page变化时，重新执行

    const loadMoreJobs = () => {
        setPage(page + 1); // 更新页码，触发useEffect加载更多数据
    };

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
            <div className="data-container">
                <button className="load-more" onClick={loadMoreJobs}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default JobList;
