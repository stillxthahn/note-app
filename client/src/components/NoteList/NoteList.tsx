import React from 'react'
import { Outlet } from 'react-router-dom'

const NoteList = () => {
	return (
		<div className='flex'>
			<div className='basis-1/2'>NoteList</div>
			<div className='basis-1/2'>
				<Outlet></Outlet>
			</div>
		</div>
	)
}

export default NoteList