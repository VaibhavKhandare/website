import React,{useState} from 'react'

const Contact =()=>{
	const initial={
		name: '',
		email:'',
		suggestions:''
	}
	const [store,setStore]=useState([])
	const [data,setData]=useState(initial)
	const changed=(event)=>{
		const {name, value} = event.target;
		setData((prevdata)=>{
			return{...prevdata,[name]:value};
		})
	}
	const formSubmit=(event)=>{
		event.preventDefault();
		if (data.name!=="" || data.email!==''){
		setStore( [...store,data])
		setData(initial);
		alert(data.name + " Submitted")}
	}
	// console.log(store)
	return(<>
		<div className='main_div'>
		<div className='center_div'>
		<br/>
		<h1>Contact Us</h1>
		<form style={{ padding:'8px', textAlign:'left'}} onSubmit={formSubmit}>
		<div className="mb-3">
		<label >Name</label>
		<input name='name'type="text" className="form-control" onChange={changed} value={data.name}/>
		</div>
		<div className="mb-3">
		<label for="exampleInputEmail1" className="form-label">Email address</label>
		<input name='email'type="email" className="form-control" onChange={changed} value={data.email}/>
		</div>
		<div className="mb-3">
		<label for="exampleInputEmail1" className="form-label">Suggestions</label>
		<input name='suggestions' type="Text" className="form-control" onChange={changed} value={data.suggestions}/>
		</div>
		<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		</div>
		</div>
		</>);
}

export default Contact