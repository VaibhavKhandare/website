import React from 'react'
import logo from './Images/logo.png'

const Header= () => {
	return (<>
		<h1 style={{color: 'black', fontStyle: 'bold', backgroundColor: '#ffff9f',fontFamily: ['Oswald', 'sansSerif']}}>
		<img src={logo} alt="logo" height='60px' weight='60px'/>
		<span style={{marginLeft: '15px'}}>Google Keep</span></h1>
		</>);
}

export default Header