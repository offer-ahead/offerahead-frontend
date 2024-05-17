import React from 'react';
import './LogoItem.css';

const LogoItem = () => {
    return (
        <logo-item className="logo-item">
            <img
                src={`${process.env.PUBLIC_URL}/Linkedin.jpg`}
                className="small_logo"
                alt="Linkedin"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Nvidia.jpg`}
                className="small_logo"
                alt="Nvidia"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Tesla.jpg`}
                className="small_logo"
                alt="Tesla"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Slack.jpg`}
                className="small_logo"
                alt="Slack"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Microsoft.jpg`}
                className="small_logo"
                alt="Microsoft"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Google.jpg`}
                className="small_logo"
                alt="Google"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Meta.jpg`}
                className="small_logo"
                alt="Meta"
            />
            <img
                src={`${process.env.PUBLIC_URL}/Intel.jpg`}
                className="small_logo"
                alt="Intel"
            />
        </logo-item>
    );
};

export default LogoItem;