import React,{useState} from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'
const Keep= () => {
	const [addItem,setAddItem] = useState([]);
	const addNote=(note)=>{
		setAddItem((prevdata)=>{
			return [...prevdata, note];
		})
	}
	const onDelete=(id)=>{
		//console.log(id);
		setAddItem((prevdata)=>{
			console.log([prevdata[id].title] = " ")
			return [...prevdata]
		})
		// })
	}
	return (<>
		<Header/>
		<div style={{
			height: '20vh',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center',
			margin:'20px'
		}}>
		<div className="center_div2">
		<CreateNote passNote={addNote}/>
		</div>
		</div>
		<div className="img_div" style={{
			flexDirection: 'row',
			justifyContent: 'right',
			alignItems: 'center',
			textAlign: 'center'
		}}>
		{addItem.map((val,index)=>{
			if (val.title!==" "){
				return (<div className="center_div2" style={{margin: "10px"}}><Note
					key = {index}
					id={index}
					title={val.title}
					content={val.content}
					deleItem={onDelete}
					/></div>);}
			else{
				return null;
			}
			})}
		</div>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		</>);
}

export default Keep
