import * as React from 'react' 
import { useState, useEffect } from 'react'
import { 
	useDisclosure,
	Modal, 
	ModalBody, 
	ModalCloseButton, 
	ModalContent, 
	ModalFooter, 
	ModalHeader, 
	ModalOverlay,
	Button,
	Text, 
	Input,
	FormControl,
	FormLabel,
	Switch} from '@chakra-ui/react'
export const AccountSettings = (props) => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()
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
					<Text onClick={onOpen}>
						Account Settings
					</Text>
					{props.client ?
					<>
						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
							<ModalHeader>Account Settings</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<Input placeholder='Email@youremail.com' />
								<FormControl display='flex' alignItems='center'>
									<FormLabel htmlFor='email-alerts' mb='0'>
										Enable email alerts?
									</FormLabel>
									<Switch id='email-alerts' />
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button colorScheme='red' mr={3} onClick={onClose}>
								Cancel
								</Button>
								<Button colorScheme='blue'>Save</Button>
							</ModalFooter>
							</ModalContent>
						</Modal>
					</>:
					<>
						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
							<ModalHeader>Account Settings</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								admin
							</ModalBody>

							<ModalFooter>
								<Button colorScheme='red' mr={3} onClick={onClose}>
								Cancel
								</Button>
								<Button colorScheme='blue'>Save</Button>
							</ModalFooter>
							</ModalContent>
						</Modal>
					</>}
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