import React from "react"; 
import { Component } from "react";
import PropTypes from 'prop-types';
import './Tabscss.css';
import TabSelector from './TabSelector';

class TabList extends Component{
    static propTypes = {
        children : PropTypes.instanceOf(Array).isRequired,
    }
    constructor(props){
        super(props);
        this.state ={
            tabActive : this.props.children[0].props.tablabel,
        };
    }

    TabonClick = (tab) => {
        this.setState({
            tabActive : tab
        });
    }

    render(){
        const{
            TabonClick,
            props: {
                children, },
            state :{
                tabActive, }
        } = this;

        
        return(
            <div className = "tabClass">
                <ol className = "listoftabs">
                    {children.map((child) => {
                     const {tablabel} = child.props;

                     return(
                         <TabSelector
                            tabActive = {tabActive}
                            key = {tablabel}
                            tablabel = {tablabel}
                            onClick = {TabonClick}
                          />
                     );
                     })}
                     </ol>
            <div className = "tabdetails">
                {children.map((child) => {
                    if(child.props.tablabel !== tabActive) return undefined;
                    return child.props.children;
                })}
            </div>
            </div>  
        );
    }
}



export default TabList