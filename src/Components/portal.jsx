/**
 * TODO:
 * 		make modal components for account menu
 * 		make a chat option? for demo purposes (look into web sockets)
 */
import { 
	Button,
	Card, 
	CardBody, 
	CardHeader, 
	Divider, 
	HStack, 
	Input, 
	Menu, 
	MenuButton, 
	MenuGroup, 
	MenuItem, 
	MenuList, 
	Modal, 
	ModalBody, 
	ModalCloseButton, 
	ModalContent, 
	ModalFooter, 
	ModalHeader, 
	ModalOverlay, 
	Stat, 
	StatHelpText, 
	StatNumber, 
	Table, 
	Tbody, 
	Td, 
	Textarea, 
	Th, 
	Thead, 
	Tooltip, 
	Tr, 
	VStack, 
	useDisclosure,
	} from '@chakra-ui/react'
import * as React from 'react' 
import { useState, useEffect } from 'react'
import { FaCogs, FaHandHoldingHeart } from 'react-icons/fa'
import { BsTrashFill } from 'react-icons/bs'
import { AiTwotoneSave,AiFillPlusSquare } from 'react-icons/ai'

import {IoIosLogOut} from 'react-icons/io'
import { AccountSettings } from './accSettings'
import { OpenTickets } from './openTickets'
import { ClosedTickets } from './closedTickets'
export const CustPortal = () => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const [techAvailable, settechAvailable] = useState(false)
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
					<VStack divider={<Divider/>} spacing={4}>
						<Card width={"90vw"}>
							<CardHeader>
								<b>Account Overview</b> for <i>Company/Person</i> &nbsp; 
								<Menu>
									<MenuButton as={Button} colorScheme='blue'>
										<FaCogs/>
									</MenuButton>
									<MenuList>
										<MenuGroup title='Profile'>
											<MenuItem>
												<AccountSettings client={true}/> 
											</MenuItem>
										</MenuGroup>
										<MenuGroup>
											<MenuItem>FAQ</MenuItem>
											<MenuItem>Contact</MenuItem>
											<MenuItem>
											<Button  colorScheme='red' alignSelf={'right'}>
										Sign Out&nbsp;<IoIosLogOut/>
									</Button></MenuItem>
										</MenuGroup>
									</MenuList>
								</Menu>
								
							</CardHeader>
							<CardBody>
								<Table variant={"striped"}>
									<Thead>
										<Th>
											# of open Tickets / Inquiries 
										</Th>
										<Th>
											Need remote help?
										</Th>
									</Thead>
									<Tbody>
										<Tr>
											<Td>
												<Stat>
													<StatNumber>
														<OpenTickets />
														<Tooltip label={"Create New Ticket / Inquiry"} placement='right' hasArrow>
															<Button onClick={onOpen} ml={5} variant={'unstyled'}><AiFillPlusSquare size={"32px"}/></Button>
														</Tooltip>
														<Modal isOpen={isOpen} onClose={onClose}>
															<ModalOverlay/>
															<ModalContent>
																<ModalHeader>New Ticket / Inquiry Form</ModalHeader>
																<ModalCloseButton/>
																<ModalBody>
																	<Input placeholder='Subject' m={1}/>
																	<Textarea placeholder='Please describe the issue in full detail' m={1} />
																	<input type='file' multiple/> 

																</ModalBody>
																<ModalFooter>
																	<HStack>
																		<Tooltip label={"Delete Request"}>
																			<Button colorScheme='red' onClick={onClose}><BsTrashFill/> </Button>
																		</Tooltip>
																		
																		<Tooltip label={"Save as Draft"}>
																			<Button colorScheme='blue'> <AiTwotoneSave/> </Button>
																		</Tooltip>

																		<Button colorScheme='blue'>Submit Request</Button>
																	</HStack>
																</ModalFooter>
															</ModalContent>
														</Modal>
													</StatNumber>
													<StatHelpText>
														<ClosedTickets/>
													</StatHelpText>
												</Stat>
											</Td>
											<Td>
												{techAvailable ?
												<>
													<Tooltip label="Our Technicians are available to assist you!">
														<Button size={'lg'} colorScheme='green'>Request Help&nbsp;<FaHandHoldingHeart/></Button>
													</Tooltip>
												</>

												:<>
													<Tooltip label="Unfortunately, no Technicians are available at this time, please check during our opening hours">
														<Button size={'lg'} colorScheme='red' isDisabled>Request Help&nbsp;<FaHandHoldingHeart/></Button>
													</Tooltip>
												</>}
												
											</Td>
										</Tr>
									</Tbody>
								</Table>
							</CardBody>
						</Card>

						<Card width={"90vw"}>
						<CardHeader>
						Attachments
						</CardHeader>
						<CardBody>
							None... yet
						</CardBody>
						</Card>
					</VStack>
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