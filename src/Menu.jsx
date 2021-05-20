import React from 'react'
import {NavLink} from 'react-router-dom'


const Menu=(prop)=>{
	const clicked=(data)=>{
	prop.fnc()
}

	return(
		<>
		<h1 className='menu' style={{backgroundColor: 'skyblue', color:'red'}}>
		<label className="switch" style={{marginTop: '13px', marginLeft: '13px'}}>
		<input type="checkbox" onClick={clicked}/>
		<span className="slider round"></span>
		</label>
		<NavLink exact activeClassName='active_class' to='/' style={{marginLeft: '10px'}}>Home</NavLink>
		<NavLink exact activeClassName='active_class' to='/keep' style={{marginLeft: '10px'}}>Keep</NavLink>
		<NavLink exact activeClassName='active_class' to='/todolist' style={{marginLeft: '10px'}}>TodoList</NavLink>
		<NavLink exact activeClassName='active_class' to='/contact' style={{marginLeft: '10px'}}>Contact</NavLink>
		</h1>
		</>
		);
}

export default Menu