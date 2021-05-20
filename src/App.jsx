import React,{useState} from 'react'
import Data from './Data'
import Todolist from './Todolist'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Keep from './Keep'
import Errore from './Error'
import {Route,Switch} from 'react-router-dom'
import Menu from './Menu'
import Contact from './Contact'




const App= () => {
	const [bg,setbg]=useState("white")
	const clicked=()=>{
		bg==='white' ? setbg("black") : setbg("white")
	}
	return (<>
		<Menu
			fnc={clicked}/>
		<div style={{backgroundColor: bg}}>
		<Switch >
			<Route exact path='/' component={Data}/>
			<Route exact path='/todolist' component={Todolist}/>
			<Route exact path='/keep' component={Keep}/>
			<Route exact path='/contact' component={Contact}/>
			<Route component={Errore}/>
		</Switch>
		</div>
		</>);
}

export default App