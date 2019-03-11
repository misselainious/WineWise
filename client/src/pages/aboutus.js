import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
import Modal from "../components/SalesTeam/Modal/Modal";
// import Carousel from "../components/common/Carousel/Carousel";
// import PropTypes from 'prop-types';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';
import SalesTeamModal from "../components/SalesTeam/Modal/Modal";
import TeamMemberCard from '../components/SalesTeam/TeamMemberCard'
import TeamMembersContainer from '../components/SalesTeam/TeamMembersContainer';

const AboutUs = () => (
    // <ResponsiveContainer>
    <React.Fragment>

        {/* <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url("./images/vineyard.jpg")` }}
            vertical>
        </Segment> */}

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Hiram Simon, Principal
            </Header>
                        <p style={{ fontSize: '1em' }}>
                            Hiram Simon began his career relatively late in the last century at The Wine Society, a unique English institution owned entirely by its customers – one of the few remaining Co-operative Societies in Britain, which is today still the pre-eminent mail-order and internet retailer. The man whose job he coveted just  retired recently.  Not, however, before obtaining a brilliant training in the basics i.e. Bordeaux, Burgundy and Champagne, with the occasional leavening of Sherry, Rhône and German Riesling, or, on exotic days, Chianti and Rioja. Despite the proto-socialist character of the place (famed leftist Edmund Penning-Rowsell was its long-serving Chairman), daily drinking consisted mostly of aged classed-growth Bordeaux and fine burgundy. After debunking to London for an especially unhappy year at an advertising agency, he came to California, specifically Berkeley (his home to this day), on Labor Day, 1982.
                            </p>

                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/wineBarrels.jpg' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Read More</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* // testing section here */}
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={6}>
                            <Image bordered rounded size='large' src='/images/vineyard.jpg' />
                        </Grid.Column>

                        <Grid.Column floated='right' width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Brian Greenwood, Principal
            </Header>
                            <p style={{ fontSize: '1em' }}>
                                Brian Greenwood burst onto the wine scene in Cambridge, Massachusetts at the now defunct Cave Atlantique, long before most of you were born. His memories of that halcyon year return more to exploring the glories of Loire Chenin and Cantonese food (or lobster and champagne) with his tasting group than to the training he received, which was cursory at best. Given no grounding in the classics, he made his way to California wines and fairly quickly to our fair state. He worked four years in retail before joining a California winery /brokerage as both a salesperson and member of the wine making team; the fact that he was uniquely unqualified for either seems to have gone unnoticed by his partners.
                            </p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Read More</Button>
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
                                <b>Elaine Cadman</b> • orders@winewise.biz • 510.473.5482
                                <br />
                                <Image avatar src='./images/winecorks.jpg' />
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            {/* <Grid>
                <Grid.Column
                    textAlign='center'>
                    <Button size='huge'>Sales Team</Button>
                </Grid.Column>
            </Grid> */}

            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 200, padding: '1em 0em', backgroundImage: `url("./images//wineBarrels.jpg")` }}
                vertical>
            </Segment>
            <TeamMembersContainer />

                {/* <Divider
                    as='h2'
                    className='header'
                    horizontal
                    style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
                    <a href=''>SALES TEAM</a>
                </Divider> */}
            {/* <Container>

                <Grid>
                    <Grid.Column
                        textAlign='center'>
                        <Button size='huge'>Sales Team</Button>
                    </Grid.Column>
                </Grid>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <TeamMemberCard 
                                name="Meliza Mokrani" 
                                region="San Francisco" 
                                email="meliza@winewise.biz"
                                phone="707.363.1055"
                            />
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Ben Herod
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (San Francisco)
                                <br />
                                    ben@winewise.biz • 415.308.2266
                                </p>
                                <Modal />
                            </Grid.Column>
                            
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Elizabeth Darden
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Marin County and Sonoma County)
                                <br />
                                    elizabethd@winewise.biz • 415.640.8503
                                </p>
                                <Modal />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Marc West-Texeira
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (East Bay, Contra Costa County, Napa County)
                                <br />
                                    marc@winewise.biz • 510.599.5566
                                </p>
                                <Modal />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Brian Cook
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Peninsula, San Francisco)
                                <br />
                                    bcook@winewise.biz • 415.539.8010
                                </p>
                                <Modal />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Hugh Weiler
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Sacramento, Central Valley, Tahoe)
                                <br />
                                    hugh@winewise.biz • 916.538.1616
                                </p>
                                <Modal />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Matt Peterson
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Santa Cruz, Monterey, Big Sur)
                                <br />
                                    matt@winewise.biz • 831.383.9469
                                </p>
                                <Modal />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Allyson Buist
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (San Luis Obispo, Paso Robles, Santa Ynez, Santa Barbara)
                                <br />
                                    allyson@winewise.biz • 530.941.1890
                                </p>
                                <Modal />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    John Bauccio
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Los Angeles)
                                <br />
                                    john@winewise.biz • 213.400.8620
                                </p>
                                <Modal />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Tami Wong
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Orange County, Long Beach, San Diego)
                                <br />
                                    tami@winewise.biz • 619.665.3748
                                </p>
                                <Modal />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Mark Johnson
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Mendocino County and Humboldt County)
                                <br />
                                    markdj@winewise.biz • 707.813.8183
                                </p>
                                <Modal />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '1.5em' }}>
                                    Nicole (Puncochar) Frazier
                                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    (Orange County)
                                <br />
                                    nicole@winewise.biz • 612.839.2695
                                </p>
                                <Modal />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </Container> */}

        </Segment>
    </React.Fragment>
    // </ResponsiveContainer>
)
export default AboutUs;
