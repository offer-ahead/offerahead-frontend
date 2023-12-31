import React from 'react';
import '../JobListing.css'; // 确保引入了 CSS 样式文件

const JobListing = ({ job }) => {
    // 定义 applyToJob 函数，用于处理申请工作的逻辑
    const applyToJob = (jobId) => {
        // 逻辑处理申请工作
        console.log(`Applying to job with id: ${jobId}`);
        // 可能是调用 API 或更新状态等
    };
    return (
        <div className="job-listing">
            <div className="job-company">
                {/* 使用实际的图片路径 */}
                <img src={job.companyLogo} alt={`${job.company} logo`} className="company-logo" />
            </div>
            <div className="job-details">
                <div className="job-title">{job.title}</div>
                <div className="job-company-name">{job.company}</div>
                <div className="job-location">{job.location}</div>
            </div>
            <div className="job-sponsor">
                {job.sponsor === 'Yes' ? (
                    <span className="sponsor-yes">✅</span>
                ) : (
                    <span className="sponsor-no">❎</span>
                )}
            </div>
            <div className="job-posted">{job.postedDate}</div>
            <div className="job-applied">
                {/* 根据实际情况可能需要处理复选框状态 */}
                <input type="checkbox" checked={job.applied} readOnly />
            </div>
            <div className="job-action">
                {/* 通过添加onClick事件来处理按钮点击 */}
                <button onClick={() => applyToJob(job.id)}>Apply</button>
            </div>
        </div>
    );
};

export default JobListing;
