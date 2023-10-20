import React, { useEffect, useState } from 'react'
import * as Styles from "../styles/projectStyle.module.css";
import axios from "axios";

function Projects() {
    const [data, setData] = useState([]);
    useEffect(() => {
        try{
            axios.get("https://api.github.com/users/Krishna-D-K/starred").then((res)=>{
                setData(res.data);
                // console.log(res.data);
            }).then(()=>{
                // console.log(data);
            })
    
        }catch(error){
            console.log(error);
        }
      }, [])
    
    return (
        <div className={Styles.container}>
            {data && data.map((entries, index)=>{
                return (
                    <a href={entries.html_url} rel='noreferrer' key = {index}>
                        <div className={Styles.projectList}>
                            <div className={Styles.projectLanguage}>{entries.language}</div>
                            <div className={Styles.projectName}>{entries.name}</div>
                            <div className={Styles.projectFullName}>{entries.full_name}</div>
                            <div className={Styles.projectDescription}>{entries.description}</div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Projects