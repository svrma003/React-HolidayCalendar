import React from "react"; 
import "./App.css"; 
import HolidayChecker from './HolidayChecker';
import TabsList from './TabsList';
import './Tabscss.css';
import UpcomingHolidays from './UpcomingHolidays';
import PassedHolidays from './PassedHolidays';
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };

  }

  render() {
     return (
      <div>
        <HolidayChecker/>
        <TabsList>
          <div tablabel = "Upcoming Holidays">
            <UpcomingHolidays/>
          </div>
          <div tablabel = "Passed Holidays">
            <PassedHolidays/>
          </div>
        </TabsList>

   </div>
    );
  
}
}
export default App
//Project By SV