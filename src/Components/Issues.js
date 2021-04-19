import React from 'react'
import Issue from "./Issue"
import Status from "./Status.js"


export default function Issues(props) {
    const count = props.issues.map((issue, i)=>{
        return <Issue key= {i} title={issue.title} issue={issue.issue} author={issue.author} date={issue.date}/>
       
    })
   
    return (
        <div>
            <Status passing={props.issues.length} total= {props.issues.length}/>
            {count}
            
        </div>
    )
}

