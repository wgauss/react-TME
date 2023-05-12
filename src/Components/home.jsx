/**
 * when a person connects to the site, states will be in place for{
 * 		chat (availability along with store hours being listed *which is also subject to change*){
 * 			if(out of hours){
 * 				skip to inquiry
 * 			} else {
 * 				they have the option to leave an inquiry rather than wait for a reply from us
 * 			}
 * 		}
 * 		holiday themes
 * }
 */
import * as React from 'react' 
import { useState, useEffect } from 'react'
export const Home = () => {
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