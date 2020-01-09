import React from 'react';
import './HolidayChecker.css';
import { Component } from 'react';

class PassedHolidays extends Component{
    constructor(props) {
        super(props);
        var currDate = new Date(),
        date = currDate.getFullYear() + '-' + (currDate.getMonth() +1 ) + '-' + currDate.getDate();
        var currDay = new Date(),
        today = currDay.getDate();
        var currtDates = new Date(),
        month = currtDates.getMonth()+1;

        this.state = {
            todayDate:date,
            todayDay:today,
            todayMonth:month,
            isLoading:true,
            holidayDetails: [],
            upcomingHolidays: []
        };
    }
    componentDidMount(){
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=59f7478787ab930a113b3e158daa4c478e0a178f&country=IN&year=2020`)
        .then(results => results.json())
        .then(
            (result) => {
                this.setState({
                    isLoading:false,
                    holidayDetails: result.response.holidays
                });
                for(let i=0;i<this.state.holidayDetails.length;i++){
                    if((this.state.holidayDetails[i].date.datetime.month<=this.state.todayMonth) && (this.state.holidayDetails[i].date.datetime.day<this.state.todayDay)){
                        this.setState({
                            upcomingHolidays:[...this.state.upcomingHolidays,this.state.holidayDetails[i].date.datetime]
                        })
                    }
                }
                console.log(this.state.holidayDetails);
                console.log(this.state.upcomingHolidays);
                
            }
        )
        
    }




    render() {
        const { upcomingHolidays , holidayDetails } = this.state;
        if(this.state.isLoading){
            return<div><span className='loadingCss'> Loading... </span></div>
        }
        else{
        return (
            <div>
                {this.state.upcomingHolidays.map((details) => (
             <p>{ details.day } |{  details.month  } </p>
             )
             )}
            </div>











        );
                }
    }
}

export default PassedHolidays