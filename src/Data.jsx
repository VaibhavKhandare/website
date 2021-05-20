import React from 'react'

function Data(){
	return (<div className="main_div">
		<div className='center_div'>
		<br/>
		<h1 style={{fontSize: "50px"}}>Project List</h1>
		<ol>
		<li>Google Keep
		<span style={{marginLeft:'40px',marginTop:'15px'}} >
		<button href='http://localhost:3000/keep' onClick={()=>{window.open('keep')}} className="button_one">Go!</button>
		</span></li>
		<p style={{textAlign: 'left',fontSize: "10px", marginTop: '-5px'}}> Some Google Keep feature /keep</p>
		<li>To-Do-List
		<span style={{marginLeft:'62px' ,marginTop:'15px'}} >
		<button href='http://localhost:3000/keep' onClick={()=>{window.open('todolist')}} className="button_one">Go!</button>
		</span></li>
		<p style={{textAlign: 'left',fontSize: "10px", marginTop: '-5px'}}>Task list /todolist</p>
	</ol>
	</div>
	</div>
	);
}

export default Data
