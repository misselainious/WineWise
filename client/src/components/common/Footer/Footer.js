import React from "react";
import { Grid, Segment, Container, List, Header } from "semantic-ui-react";

const Footer = props => {
    
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}
        color='red'>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Wine Wholesale</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Address
        </Header>
                            <p>
                                5655 College Avenue, Oakland CA 94618
                                <br/>
                                (phone) 510.848.6879 • (fax) 510.848.6880
        </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer;