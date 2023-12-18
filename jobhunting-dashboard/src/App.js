import {Button, Radio} from 'antd'
import './App.css';

import {useState,useEffect} from 'react'

import {getAlljobInfo} from './client';

function App() {
    const [jobs,setJobs] = useState([]);

    const fetchJobs = ()=>    getAlljobInfo()
        .then(response => response.json())
        .then(data => {
            console.log(data['data']);
            setJobs(data['data']);
        })


    useEffect(()=>{
        console.log("component is mounted");
        fetchJobs();
    },[]);

    return <p>{jobs.length}</p>;
}

export default App;
