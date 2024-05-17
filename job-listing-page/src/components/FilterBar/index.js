import React from 'react';
import './FilterBar.css'; // 确保有 Index.css 文件

const FilterBar = ({ onFilterChange }) => {
    return (
        <div className="filter-bar">
            <input type="text" placeholder="Search Job Title, Skill Sets, Companies ..." onChange={onFilterChange} />
            <button>Search</button>
            {/* ...添加其他过滤选项 */}
        </div>
    );
};

export default FilterBar;
