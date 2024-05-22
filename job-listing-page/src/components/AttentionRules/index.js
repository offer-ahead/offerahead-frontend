import React, { useState, useEffect } from "react";
import axios from "axios"; // 请确保安装了 axios
import config from "../../config";
import "./AttentionRules.css"; // 导入样式文件

const AttentionRules = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyUrl, setCompanyUrl] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [jobList, setJobList] = useState([]);
    const [cssPath, setCssPath] = useState([]);//bug?
    const [error, setError] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${config.API_MARKET_URL}/api/crawler/rule_check`, {
                companyName: companyName,
                companyUrl: companyUrl,
                jobTitle: jobTitle,
                careerPageUrl: jobLink,
                cssPath: cssPath,
            });
            console.log(response.data.data);
            setJobList(response.data.data);
            setError("");
            setShowResults(true); // 显示结果
            setSuccessMessage("Submission successful!"); // 设置成功消息
        } catch (error) {
            setJobList([]); // 清空jobList
            setShowResults(false); // 隐藏结果列表
            setError("An error occurred. Please try again later.");
        }
    };

    const handleSaveRule = async () => {
        try {
            console.log({
                companyName: companyName,
                companyUrl: companyUrl,
                jobTitle: jobTitle,
                careerPageUrl: jobLink,
                cssPath: cssPath,
            });
            await axios.post(`${config.API_MARKET_URL}/api/crawler/rule`, {
                companyName: companyName,
                companyUrl: companyUrl,
                jobTitle: jobTitle,
                careerPageUrl: jobLink,
                cssPath: cssPath,
            });
            setShowResults(false);
            setError("");
            setSuccessMessage("Submission successful!"); // 设置成功消息
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        // 在组件挂载时执行一次表单提交
        handleSubmit({ preventDefault: () => {} });
    }, []); // 空数组表示仅在组件挂载时执行

    return (
        <div className="attention-rules-container">
            <h1>Attention Rules</h1>
            <form onSubmit={handleSubmit} className="attention-rules-form">
                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Company URL"
                    value={companyUrl}
                    onChange={(event) => setCompanyUrl(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Job Link"
                    value={jobLink}
                    onChange={(event) => setJobLink(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="CSS Path"
                    value={cssPath}
                    onChange={(event) => setCssPath(event.target.value)}
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>

            <div className="results-container">
                {successMessage && <p className="success-message">{successMessage}</p>} {/* 显示成功消息 */}
                {/* 只有在显示结果时才渲染 */}
                {showResults && (
                    <div className="results-container">
                        {error && <p className="error-message">{error}</p>}
                        {jobList.length > 0 ? (
                            <ul className="job-list">
                                {jobList.map((job, index) => (
                                    <li key={job.id} className={`job-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                        <div className="job-content">
                                            <span className="company-name"> {index + 1}. {job.companyName}</span> <a
                                            href={job.jobUrl}>{job.jobTitle}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-results-message">No results found.</p>
                        )}
                        <button type="submit" className="submit-button" onClick={handleSaveRule}>Submit Attention Rule</button>
                    </div>
                )}
            </div>
        </div>

    );
};

export default AttentionRules;
