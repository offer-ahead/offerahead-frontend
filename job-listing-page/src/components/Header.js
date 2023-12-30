import React from 'react';
import '../Header.css'; // 确保有 Header.css 文件

const Header = () => {
    return (
        <header className="header">
            <div className="logo">JobPulse</div>
            <nav className="navigation">
                {/* 这里放置导航链接 */}
                <a href="/newgrad">Software NewGrad</a>
                <a href="/intern">Software Intern</a>
                <a href="/fulltime">Product Full-Time</a>
                {/* ...其他链接 */}
            </nav>
            <div className="user-actions">
                <button className="login-button">Log In</button>
                {/* ...其他用户操作 */}
            </div>
        </header>
    );
};

export default Header;
