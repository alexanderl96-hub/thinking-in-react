import React from 'react'

const Issue = ({title, author, date, issue })=>{
    return (
        <div className="issuedispl">
            <input className="checkbox"  type="checkbox" required></input>
            <div className='display'> 
                <h2>{title}</h2> 
                <p>#{issue} opened on {date} by {author}</p> 
            </div>
        </div>
    )
}
    
 export default Issue