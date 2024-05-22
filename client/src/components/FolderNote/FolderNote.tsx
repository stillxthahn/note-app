import React from 'react'
import { IFolder } from '../Home/Home'

interface FoldersProp {
	folders: Array<IFolder>
}

const FolderNote = ({ folders }: FoldersProp) => {
	console.log("FOLDER NOTE", folders)
	return (
		<div className=''>
			<span>Folder note</span>
			{folders.map((folder, index) => (
				<div key={index}>{folder.name}</div>
			))}
		</div>
	)
}

export default FolderNote