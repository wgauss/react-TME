/*
CI = Chat/Inquiry. this just makes it so that i don't have to make serparate components
props.type = true === "Chat"
props.type = false === "Inquiry"

TODO: Implement{
	archive conditional
	server-side chat
	*once home is complete* client-side chat
} 

*/
import { Card, CardHeader, Button, Tag, Code,
		Modal,
		ModalOverlay,
		ModalContent,
		ModalHeader,
		ModalFooter,
		ModalBody,
		ModalCloseButton,
		useDisclosure,
		} from '@chakra-ui/react'
import * as React from 'react'
import { useState, useEffect } from 'react'
import moment from "moment"

export const CI = (props) => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const [customerDataBaseID, setCustomerDataBaseID] = useState("")
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
	function calcTime(inputTime){
		while(true){
			let rv = moment(inputTime, "YYYYMMDDHHmm").fromNow();
			return rv
		}
	}
	function formatted(){
		let rv = "";
		let counter = 0;
		for(const char of props.timeCreated ){
			if(counter === 3){
				rv+= char + " "
			} else if(counter === 5){
				rv+= char + " "
			} else if(counter === 7){
				rv+= char + " "
			} else if(counter === 9){
				rv+= char + ":"
			} else {
				rv+= char
			}
			counter++;
		}
		return moment(rv).format("MMMM Do YYYY, h:mm a")
	}
	function viewModal(){
		return(<>
		<Modal isOpen={isOpen} onClose={onClose}>
									<ModalOverlay />
									<ModalContent>
										{props.type ? 
										<>
											<ModalHeader>Chat</ModalHeader>
										</> 
										:<>
											<ModalHeader>Inquiry</ModalHeader>
										</>}
									<ModalCloseButton />
									<ModalBody>
										{props.clientName}
									</ModalBody>

									<ModalFooter>
										<Button colorScheme='blue' mr={3} onClick={onClose}>
										Close
										</Button>
										{props.type ? 
										<>
											<Button variant='ghost'>Open Chat</Button>

										</> 
										:<>
											<Button variant='ghost'>Respond to Inquiry</Button>
										</>}
									</ModalFooter>
									</ModalContent>
								</Modal>
		</>)
	}
	return(
			<>
				{showDesktop ? 
				<>
					Put Desktop Shit Here
				</>
				: <></>}
				{showTablet ? 
				<>
					{props.type ? 
					<>
						<Card background={'#f54269'}>
							<CardHeader>
								{props.clientName} 
								<Tag fontSize={18} mb={1}>{calcTime(props.timeCreated)} | ({formatted()})</Tag> 
								<Code fontSize={18} mb={1}>{props.topicTitle}</Code> <br/>
								<Button onClick={onOpen}>View</Button>
								{viewModal()}
							</CardHeader>
						</Card>	
					</>: 
					<>
						<Card background={'#4287f5'}>
							<CardHeader>
								{props.clientName} 
								<Tag fontSize={18} mb={1}>{calcTime(props.timeCreated)} | ({formatted()})</Tag> 
								<Code fontSize={18} mb={1}>{props.topicTitle}</Code> <br/>
								<Button onClick={onOpen}>View</Button>
								{viewModal()}
							</CardHeader>
						</Card>	
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