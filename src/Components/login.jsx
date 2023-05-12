import * as React from 'react' 
import { useState, useEffect } from 'react'
import $ from "jquery"
import { Grid, 
		GridItem, 
		Input, 
		VStack, 
		Text, 
		Flex, 
		Button,
		InputGroup,
		InputRightElement,
		Tooltip,
		useToast} from '@chakra-ui/react'

import { ColorModeSwitcher } from "../ColorModeSwitcher"

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

import ReCAPTCHA from "react-google-recaptcha";
import { redirect } from 'react-router-dom'
export const Login = () => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const [isSubmitting, setSubmitting] = useState(false)
	const [revealPassword, setFaceReveal] = useState(false)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const toast = useToast()

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

	function updatePass(val){
		setPassword(val)
		console.log(password)
	}

	function updateUser(val){
		setUsername(val)
		console.log(username)
	}

	function changePassState() {
		setFaceReveal(!revealPassword)
		console.log(revealPassword)
	}
	
	function handleSubmit(){
		setSubmitting(true)
		setTimeout(() => {
			$.ajax({
				url: "addCustomer.php",
				data: {"user": username, "password" : password},
				method: "POST",
				success: () => {
					console.log("yes yes")
				},
				error: () => {
					console.log("nah")
				}
			}) 
			setSubmitting(false)
			setPassword("")
			setUsername("")
			toast({
				title: 'Log in successful!',
				description: "Welcome back " + username,
				status: 'success',
				duration: 9000,
				isClosable: true,
			  })
			  this.props.history.push("/Customer-Portal")

		}, 3000);
		
	}

	useEffect(() => {
			updateDimensions()
			window.addEventListener("resize", updateDimensions)
		}, [])
	async function onCaptchaChange(val){
		console.log(val)
		let data = {
			"secret": "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
			"response": val
		}
		const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
			method: "POST",
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data) 
		})
		const result = await response.json();
		console.log(result)
	}	
	return(
			<>
			<VStack fontFamily={'Inter'}>
				{showDesktop ? 
				<>
					Put Desktop Shit Here
				</>
				: <></>}
				{showTablet ? 
				<>
					<Text>Welcome to the Login Portal!</Text>
					<Grid 
						display={'flex'}
						justifyContent={'center'}
						borderRadius={'10px'}
						width={'65vw'}
						alignItems={'center'}>
						<GridItem 
							padding={10}>
								<Flex>
									<VStack>
										<img src={require('../Images/TME-Logo.png')}/>
										<Input placeholder='Username' onChange={(event) => updateUser(event.target.value) } value={username} isDisabled={isSubmitting}/>
										{revealPassword ? 
										<>
											<InputGroup>
											<Input placeholder='Password' onChange={(event) => updatePass(event.target.value)} value={password} isDisabled={isSubmitting}/>
											<InputRightElement>
											<Tooltip hasArrow label='Hide Password' bg='gray.300' color='black'>
											<Button onClick={()=> changePassState()}>
													<AiFillEyeInvisible transform='scale(3)'/>
												</Button>
											</Tooltip>
												
												</InputRightElement>
											</InputGroup>
										</>:
											<>
											<InputGroup>
											<Input placeholder='Password' type='password' onChange={(event) => updatePass(event.target.value)} value={password} isDisabled={isSubmitting}/>
											<InputRightElement> 
												<Tooltip hasArrow label='Show Password' bg='gray.300' color='black'>
													<Button onClick={()=> changePassState()}>
														<AiFillEye transform='scale(3)'/>
													</Button>
												</Tooltip>
												</InputRightElement>
											</InputGroup>
										</>}
										<ReCAPTCHA
										sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
										onChange={(val) => onCaptchaChange(val)}
										/>
										<Button colorScheme='blue' isLoading={isSubmitting} onClick={() => handleSubmit()}>
											Submit
										</Button>
									</VStack>
								</Flex>
						</GridItem>
					</Grid>
				</>
				:<></>}
				{showMobile ?
				<>
					Put Mobile Shit here
				</>
				:<></>}
			</VStack>
			</>
		)
}