import React from 'react';

import './fonts.css';
import './main.css';

import { Container, Divider } from '@material-ui/core';

import events from './events';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en");
const localizer = momentLocalizer(moment);

const EventCalendar = () => {

    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        EVENT CALENDAR
                    </div>
                    <Divider />
                    <div id="calendarfont" style={{ height: 700, marginTop: 20 }}>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            defaultDate={new Date()}
                            defaultView="month"
                            startAccessor="start"
                            endAccessor="end"
                            eventPropGetter={ () => {
                                let style = {
                                  backgroundColor: "#5f181b",
                                  color: 'white',
                                  border: "1px solid black",
                                };
                          
                                return {
                                    style: style
                                };
                              }
                            
                            }
                        />
            </div>
                </Container>
            </div> 
            
        </div>
    );
}

export default EventCalendar;