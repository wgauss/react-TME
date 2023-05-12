import * as React from 'react' 
import { useState, useEffect } from 'react'
export const ClientSideChat = () => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	let updateDimensions = () => {
		if (window.innerWidth > 1100) {
			setDesktop(true)
			setMobile(false)
			setTablet(false)
		} else if (window.innerWidth > 700) {
			setTablet(true)
			setDesktop(false)
			setMobile(false)
		} else if (window.innerWidth < 700) {
			setMobile(true)
			setTablet(false)
			setDesktop(false)
		}
		console.log(window.innerWidth + " " + window.innerHeight)
	} 
	useEffect(() => {
			updateDimensions()
			window.addEventListener("resize", updateDimensions)
		}, [])
		
	return(
			<>
				{showDesktop ? 
				<>
					Put Desktop Shit Here
				</>
				: <></>}
				{showTablet ? 
				<>
					Put Tablet shit in here
				</>
				:<></>}
				{showMobile ?
				<>
					Put Mobile Shit here
				</>
				:<></>}
			</>
		)
}