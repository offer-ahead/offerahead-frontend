import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import '../JobList.css'; // 确保有 JobList.css 文件

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // 模拟从 API 获取数据
        // 这里应该替换成你实际的 API 调用
        const mockData = [
            { id: 1, company: 'IBM', title: 'Fullstack Developer - Remote',sponsor: 'Yes', location: 'United States', postedDate: 'today' },
            // ...其他职位数据
        ];
        setJobs(mockData);
    }, []);

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
