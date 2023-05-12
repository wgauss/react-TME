/** also create a home page for tme2011.cum
 * TODO:
 * 		create (copy lol) a login page
 * 		create the checks (session) to be sure the right ppl have access to this page and it's tools
 * 		tools{
 * 			chat (have it's own modal and/or page){
 * 				change the home page to show when the chat feature will be available (perhaps have selected hour form to correspond to the home page)
 * 				changing store hours changes {
 * 					chat feature availability
 * 					site display of our hours (may even have some cute shit)
 * 				}
 * 			}
 * 		}
 * 		They'd also like to have holiday themes as well (check date, if this then =>)
 * 		They'd like to have the third eye display, which only displays chats/inquiries at the moment
 */
import { Button, 
		Grid, 
		GridItem, 
		Table, 
		TableCaption, 
		Tbody, 
		Td, 
		Th, 
		Thead, 
		Tr, 
		VStack,
		Text,
		Stat,  StatNumber, StatHelpText, StatArrow, Link, Flex, 
		Tabs,TabList,Tab,TabPanel, TabPanels, } from '@chakra-ui/react'
import * as React from 'react' 
import { useState, useEffect } from 'react'
import "../SCSS/admin.scss"
import { CI } from './CI'
export const AdminPanel = () => {
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
					<Grid templateColumns={"repeat(2,1fr)"} textAlign={'center'} p={3}>
						<GridItem height={'92vh'} overflowY={'scroll'}>
						<Tabs variant='enclosed'>
							<TabList>
								<Tab>Current Queue</Tab>
								<Tab>Archived</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
								<VStack p={1}>
								<Flex fontSize={34}><Text color={'#f54269'} >Chats</Text> &nbsp; / &nbsp; <Text color={'#4287f5'}>Inquiries</Text> </Flex>
								<CI 
									type={true}
									clientName="Heather S."
									timeCreated="202305111234"
									topicTitle="IPhone 8 not charging"
								/>
								<CI 
									type={false}
									clientName="Heather S."
									timeCreated="202305101134"
									topicTitle="My Laptop is rebooting"
								/>
							</VStack>
								</TabPanel>
								<TabPanel>
									<VStack>
										<CI 
											type={true}
											clientName="Heather S."
											timeCreated="202305061234"
											topicTitle="IPhone 8 not charging"
										/>
										<CI 
											type={false}
											clientName="Heather S."
											timeCreated="20230101134"
											topicTitle="IPhone 8 not charging"
										/>
									</VStack>
								</TabPanel>
							</TabPanels>
						</Tabs>
						
						</GridItem>
						<GridItem>
						<Tabs variant='enclosed'>
							<TabList>
								<Tab>Quick Settings</Tab>
								<Tab>Referral Program Overview</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
								<VStack>
									<Button>Change Password</Button>
									<Button>Change Notification Email</Button>
									<Button>Change Store Hours</Button>
								</VStack>
								</TabPanel>
								<TabPanel>
								<Table>
								<Thead>
									<Th>
										Affiliate
									</Th>
									<Th>
										Traffic
									</Th>
									<Th>
										from
									</Th>
								</Thead>
								<Tbody>
									<Tr>
										<Td>
											Tyler
										</Td>
										<Td>
											<Stat>
												<StatNumber>345,670</StatNumber>
												<StatHelpText>
												<StatArrow type='increase' />
												23.36% (May)
												</StatHelpText>
											</Stat>
										</Td>
										<Td>
											<Link href='tme.com/Tyler'>Business Card</Link>
										</Td>
									</Tr>
									<Tr>
										<Td>
											Jared
										</Td>
										<Td>
											<Stat>
												<StatNumber>345,670</StatNumber>
												<StatHelpText>
												<StatArrow type='increase' />
												23.36% (May)
												</StatHelpText>
											</Stat>
										</Td>
										<Td>
											<Link href='tme.com/jared'>Business Card</Link>
										</Td>
									</Tr>
									<Tr>
										<Td>
											Troy
										</Td>
										<Td>
											<Stat>
												<StatNumber>345,670</StatNumber>
												<StatHelpText>
												<StatArrow type='increase' />
												23.36% (May)
												</StatHelpText>
											</Stat>
										</Td>
										<Td>
											<Link href='tme.com/troysimptech'>Business Card</Link>
										</Td>
									</Tr>
									<Tr>
										<Td>
											LaSalle Restaurant
										</Td>
										<Td>
											<Stat>
												<StatNumber>345,670</StatNumber>
												<StatHelpText>
												<StatArrow type='increase' />
												23.36% (May)
												</StatHelpText>
											</Stat>
										</Td>
										<Td>
											<Link href='tme.com/lasalleresturaunt'>QR Code</Link>
										</Td>
									</Tr>
								</Tbody>
								<TableCaption>Please Note visiting the 'FROM' link will increment the traffic</TableCaption>
							</Table>
								</TabPanel>
							</TabPanels>
						</Tabs>
						</GridItem>
					</Grid>
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