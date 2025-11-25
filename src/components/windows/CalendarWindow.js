import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CalendarWindow = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const days = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(<td key={`empty-${j}`} className="p-0 h-10" />);
        } else if (date > daysInMonth) {
          week.push(<td key={`empty-${i}-${j}`} className="p-0 h-10" />);
        } else {
          const isToday = 
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          
          week.push(
            <td key={date} className="p-0 h-10 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`calendar-day ${isToday ? 'today' : ''}`}
                onClick={() => setSelectedDate(new Date(year, month, date))}
              >
                {date}
              </motion.div>
            </td>
          );
          date++;
        }
      }
      days.push(<tr key={i}>{week}</tr>);
    }

    return days;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      {/* Calendar Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-4 mb-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigateMonth('prev')}
          className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          ‹
        </motion.button>
        
        <h2 className="text-lg font-medium text-gray-800 tracking-wide">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigateMonth('next')}
          className="w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
        >
          ›
        </motion.button>
      </motion.div>

      {/* Calendar Table */}
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full border-separate border-spacing-0 bg-transparent text-gray-800 text-base"
      >
        <thead>
          <tr>
            {weekdays.map(day => (
              <th key={day} className="bg-transparent font-semibold text-gray-500 pb-1.5 border-none text-sm">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderCalendar()}
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default CalendarWindow;
