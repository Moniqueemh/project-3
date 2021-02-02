//import React from 'react';
// react calendar
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function MyCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar-style'>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default MyCalendar;