import React from "react"; 
import './HolidayChecker.css';
import { Component } from "react";

class HolidayChecker extends Component {
  constructor(props) {
    super(props);
        var currDate = new Date(),
        date = currDate.getDate() + ' ' + (currDate.getMonth() +1 ) + ' ' + currDate.getFullYear();
        var currDates = new Date(),
        day = currDates.getDate();
        var currtDates = new Date(),
        month = currtDates.getMonth()+1;
        var curDates =new Date(),
        year = curDates.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
        const sv = new Date(),
        varMonth = monthNames[sv.getMonth()];

    this.state = {
        date: date,
        day:day,
        month:month,
        year:year,
        varMonth:varMonth,
        isLoading:true,
        isHoliday:false,
        holidayDetails: []
    };

  }


  componentDidMount(){
      fetch(`https://calendarific.com/api/v2/holidays?&api_key=59f7478787ab930a113b3e158daa4c478e0a178f&country=IN&year=2020&day=${this.state.day}&month=${this.state.month}`)
      .then(results => results.json())
      .then(
          (result) => {
              this.setState({
                  isHoliday: true,
                  isLoading:false,
                  holidayDetails: result.response.holidays
              });
              console.log(this.state.holidayDetails);
          }
      )
      
  }
 
  render() {
    const { isHoliday, holidayDetails } = this.state;
    if(this.state.isLoading){
        return<div><span className='loadingCss'> Loading... </span></div>
    }
    else if(isHoliday){
    if(this.state.holidayDetails.length<1){
        return<div><h2 className='noCondition'> No Holiday Today </h2></div>
    }
    else{
     return (
         <div>
             <p><b><span className='yesCondition'> Hey, you got Holiday today. </span></b></p>
            <p><h2>{this.state.day} {this.state.varMonth} {this.state.year}</h2></p>
             {this.state.holidayDetails.map((details) => (
             <p><span className='nameCss'>{ details.name }</span><br/><br/>
             <span className='typeCss'>{  details.type  }</span></p>
             )
             )}
   </div>
    );
        }   
      }      
  }
}
export default HolidayChecker