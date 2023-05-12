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
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Tooltip,
	Link,
	Box} from '@chakra-ui/react'
export const ClosedTickets = (props) => {
	const [showDesktop, setDesktop] = useState(false)
	const [showTablet, setTablet] = useState(false)
	const [showMobile, setMobile] = useState(false)
	const { isOpen : ticketIsOpen, onOpen : ticketOnOpen, onClose: ticketOnClose } = useDisclosure()
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
					<Tooltip label="View Completed Tickets" hasArrow >
						<Link onClick={ticketOnOpen}>140 Resolved</Link>
					</Tooltip>
					<Modal isOpen={ticketIsOpen} onClose={ticketOnClose}>
						<ModalOverlay/>
						<ModalContent>
							<ModalHeader>Completed Tickets / Inquiries</ModalHeader>
							<ModalCloseButton/>
							<ModalBody>
								<Accordion>
									<AccordionItem>
										<h2>
										<AccordionButton>
											<Box as="span" flex='1' textAlign='left'>
											Section 1 title
											</Box>
											<AccordionIcon />
										</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat.
										</AccordionPanel>
									</AccordionItem>

									<AccordionItem>
										<h2>
										<AccordionButton>
											<Box as="span" flex='1' textAlign='left'>
											Section 2 title
											</Box>
											<AccordionIcon />
										</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat.
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</ModalBody>
						</ModalContent>
					</Modal>
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