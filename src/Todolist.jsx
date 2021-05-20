import React,{useState} from 'react'
import Clock from 'react-digital-clock'
import './index.css'


const Todolist=()=>{
	const [cur,setcur] = useState("")
	const [items,setitems] = useState([])

	const changes=(event)=>{
		console.log(event.target.value)
		setcur(event.target.value)
	}
	const clicked=(event)=>{
		event.preventDefault();
		setcur("")
		if (cur.trim()){
		setitems((olditems)=>{
			return [...olditems, cur.trim()];
		})}
		else{
			setitems((olditems)=>{
			return [...olditems];
		})
		}
	}
	const dele = (event) =>{
		console.log(event.target.innerHTML);
		setitems((olditems)=>{
			olditems.splice(event.target.innerHTML-1,1)
			console.log(olditems);
			return [...olditems];
		})
	}
	const striked = (event) =>{
		console.log(event.target.innerHTML-1); 
		setitems((olditems)=>{
			if (olditems[event.target.innerHTML-1][0]=== " "){
				return [...olditems];
			}
			else{
			var txt = " " + olditems[event.target.innerHTML-1]
			olditems.splice(event.target.innerHTML-1,1,txt)
			console.log(olditems);
			return [...olditems];
			}
		})
	}

	return (
	<>
	<div className='main_div'>
		<form onSubmit={clicked}>
		<div className = 'center_div'>
			<br/>
			<h1>To Do List</h1>
			<br/>
			<input type="text" onChange={changes} placeholder="Add a task" value={cur}/>
			<button className='button_one' type='submit'>+
			</button>
			<br/>
			<br/>
			<ol>
				{items.map((itemval,index)=>{
					return <li style = {{textDecoration: (itemval[0]===" ") ? 'line-through': 'none'}}>
					<span>
					<button  onClick={striked} onDoubleClick={dele} className='button_two' style = {{textDecoration: 'none'}}>
					{index+1}</button>
					</span>
					<span style = {{marginLeft: '10px', marginTop: '3px'}}>
					{itemval}
					</span></li>;
 				})}
			</ol>
		</div>
		<div className='div_clock'><Clock/></div>
		</form>
	</div>
	</>
	);

}

export default Todolist