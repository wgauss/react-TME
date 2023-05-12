/**\
 * show a vstack of tickets, which are tied to their devices
 * called from the mysql server (sha256)
 * for each
 * example: Person.device
 * 
 * TODO:
 * 	Login page w/ sql
 * 
 * customer class {
 * 
 * name
 * phone num
 * address
 * devices *array of objects* (
 * 		device(
 * 			{}
 * 	)
 * )
 * }
 * 
 * import * as React from 'react' 
import { useState, useEffect } from 'react'
export const  = () => {
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
 */
import * as React from "react"
import { useState, useEffect } from 'react'

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ChakraProvider,
  theme,
  Flex
} from "@chakra-ui/react"
import { Login } from "./Components/login";
import { CustPortal } from "./Components/portal";
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import "@fontsource/inter"
import { AdminPanel } from "./Components/adminPanel";

export const App = () => {
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
		<ChakraProvider theme={theme}>
			<Flex justifyContent={'right'}>
				<ColorModeSwitcher/>
			</Flex>
		<BrowserRouter>
			
			<Routes>
				<Route path="/Login" element={<Login/>}/>
				<Route path="/Customer-Portal" element={<CustPortal/>}/>
				<Route path="/admin" element={<AdminPanel/>}/>
			</Routes>

		</BrowserRouter>

	</ChakraProvider>
	)
}
