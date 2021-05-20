import React,{useState} from 'react'
import AddIcon from "@material-ui/icons/Add"

const CreateNote= (props) => {
	const initial ={
		title: "",
		content: ""
	}
	const [note,setNote] = useState(initial);
	const [expand,setExpand]=useState(false);

	const changes=(event)=>{
		const value = event.target.value
		const name = event.target.name;
		console.log(name+ value)
		setNote((prevdata)=>{
			return {
				...prevdata,
				[name]: value
			}
		})
	}

	const addEvent=()=>{
		console.log(note.title !== "" || note.content !== "" )
		if (note.title !== "" || note.content !==""){
			props.passNote(note);
			setNote(initial)}
		}
		const opene =()=>{
			setExpand(true)
		}
		const close =()=>{
			setExpand(false)
		}

		return (<>
			<div className="container">
			<div className="row">
			<div className="col" style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center'			}}>
			<input name = 'title' type="text"  onChange={changes} onClick={opene} value={note.title} onDoubleClick={close} placeholder="Title" style={{width: '150px',borderBottom: '2px solid #f4b400'}}/>
			{expand ? <textarea name = 'content' style={{marginTop: '5px'}}  onChange={changes} value={note.content} placeholder="Description"></textarea> : null }
			</div>
			<div className="col" style={{
						height: '20vh',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center'
			}}>
			{expand ? <button className="button_four" onClick ={addEvent}> <AddIcon/></button> : null}
			</div>
			</div>
			</div>
			</>);
		}

		export default CreateNote 