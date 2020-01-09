import React from "react"; 
import { Component } from "react";
import './Tabscss.css';
import PropTypes from 'prop-types';

class TabSelector extends Component{
    static propTypes = {
        tabActive : PropTypes.string.isRequired,
        tablabel : PropTypes.string.isRequired,
        onClick : PropTypes.func.isRequired,
    };

    onClick = () => {
        const {
            tablabel, onClick
        } = this.props;
        onClick(tablabel);
    }

    render() {
        const{ onClick, props: {
            tabActive, tablabel,
        },
    } = this;
    
    let className = "listoftabs-item";
    if(tabActive === tablabel) {
        className = className+ "listoftabs-active";
    }


    return(
        <li
            className = {className}
            onClick = {onClick}
        >
            {tablabel}
        </li>

        );
    }
}



export default TabSelector