import React, { Component } from 'react';
import { Grid, Card, Sticky, Rail, Ref, Header, Button, Segment, CommentAction, Menu, Dropdown } from "semantic-ui-react";



class CountryDropdown extends Component{


    handleScroll = (country) => {
        
        document.getElementById(country).scrollIntoView();
      }
    render () {
    return (
        <Dropdown text='Jump to Country'>
            <Dropdown.Menu>
                <Dropdown.Item flag='fr' text='France' onClick={() => this.handleScroll("france")}/>
                <Dropdown.Item flag='es' text='Spain' onClick={() => this.handleScroll("spain")}/>
                <Dropdown.Item flag='pt' text='Portugal' onClick={() => this.handleScroll("portugal")}/>
                <Dropdown.Item flag='gr' text='Greece' onClick={() => this.handleScroll("greece")}/>
                <Dropdown.Item flag='de' text='Germany' onClick={() => this.handleScroll("germany")}/>
                <Dropdown.Item flag='at' text='Austria' onClick={() => this.handleScroll("austria")}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}
}
export default CountryDropdown;

