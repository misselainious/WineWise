import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
import Modal from "../components/SalesTeam/Modal/Modal";
import { Link } from 'react-router-dom';

import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
    Divider
} from 'semantic-ui-react';
import SalesTeamModal from "../components/SalesTeam/Modal/Modal";
import TeamMemberCard from '../components/SalesTeam/TeamMemberCard'
import TeamMembersContainer from '../components/SalesTeam/TeamMembersContainer';

class AboutUs extends React.Component {
    state = {
        modal: false,
        currentMember: null,
    }

    handleOpenModal = member => {
        this.setState({ modal: true, currentMember: member });
    }

    handleCloseModal = () => {
        this.setState({ modal: false, currentMember: null });
    }

    render() {
        const { modal, currentMember } = this.state;
        return (
            <React.Fragment>
                    
                <Segment style={{ padding: '8em 0em' }} vertical>
                <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
                        <a href=''>FOUNDERS</a>
                    </Divider>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Hiram Simon, Principal
                </Header>
                                <p style={{ fontSize: '1.25em' }}>
                                    Hiram Simon founded this company on the principle of providing great wine from great people. He's been fortunate to shape the direction of this company.
                                </p>
                                <Link to="/hiram">
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                                </Link>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='medium' src='/images/Hiram.jpg' />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>

                    <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
                        <a href=''></a>
                    </Divider>

                    <Segment style={{ padding: '2em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column floated='left' width={6}>
                                    <Image className="modalImageSize" bordered rounded size='medium' src='/images/BrianGreenWood.jpg' />
                                </Grid.Column>

                                <Grid.Column floated='right' width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Brian Greenwood, Principal
                </Header>
                                    <p style={{ fontSize: '1.25em' }}>
                                        Brian keeps this company moving forward and catches all of Elaine's mistakes.
                                </p>
                                <Link to="/greenwood">
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                                </Link>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                    <Segment style={{ padding: '0em' }} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Primary Contacts
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>Hiram Simon • hiram@winewise.biz • 510.848.6879
                            <br />
                                        Brian Greenwood • brian@winewise.biz • 510.524.2270
                            </p>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Order Desk
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        {/* <Image avatar src='./images/winecorks.jpg' /> */}
                                        orders@winewise.biz • 510.473.5482
                                    <br />
                                        <Image avatar src='./images/winecorks.jpg' />
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                    <TeamMembersContainer handleOpenModal={this.handleOpenModal} />


                    <SalesTeamModal open={modal} member={currentMember} closeModal={this.handleCloseModal} />

                </Segment>
            </React.Fragment>
        )
    }
}


export default AboutUs;
