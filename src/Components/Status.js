import React from 'react'

 const Status =({passing})=> {
   
    console.log()
    return (
        <div>
            <div>
         <input className="check" type="checkbox"></input>
         <label>  ®️ {passing} Open </label>
         <label>  ✔️ {passing}Closed</label>
         <select><option value="Author">Author</option></select>
         <select><option value="Label">Label</option></select>
         <select><option value="Projects">Projects</option></select>
         <select><option value="Milestones">Milestones</option></select>
         <select> <option value="Assignee">Assignee</option></select>
         <select><option value="Sort">Sort</option></select>
        
        </div>
        </div>
    )
}
export default Status