import React from 'react'
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"

const Note= (props) => {
	const dele=()=>{
		props.deleItem(props.id);
	}
	return (<>
		<div className="container">
		<div className="row">
		<div className="col" style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center'	,
			marginTop: '0px'		}}>
			<h3>{props.title}</h3>
			<br/>
			<p>{props.content}</p></div>
			<div className="col" style={{
				height: '20vh',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center'
			}}>
			<button onClick={dele} className='button_three'> <DeleteOutlineIcon/></button>
			</div>
			</div>
			</div>
			</>);
}

export default Note 