import React from "react";

import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const Greenwood = () => (

    <React.Fragment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Greenwood Simon, Principal
                </Header>
                        <p style={{ fontSize: '1em' }}>
                           Brian is writing about how his experience helps bring us the fantasic WineWise wines we know and love. Check back soon and he'll tell you all about it... 
                                </p>
                    </Grid.Column>

                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/BrianGreenwood.jpg' />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    </React.Fragment>
)

export default Greenwood;
