import React from 'react'
import { GlassyCard } from '~/components/custom'


const galleryJson = [
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
	{
		"image": "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
		"title": "Life hack",
		"description": "How to park your car at your garage?"
	},
]

function page() {
	return (
		<div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-32">
			<div className="px-2">
				<div className="flex flex-row flex-wrap gap-8 justify-center">
					{galleryJson.map((item, index) => (
						<GlassyCard className="hover:scale-105 hover:cursor-pointer transform-gpu ease-in-out duration-150" key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default page