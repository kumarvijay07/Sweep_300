import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  // Get current month and year
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Set number of days in the current month
  useEffect(() => {
    const days = new Date(year, currentDate.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(year, currentDate.getMonth(), 1).getDay();
    const blankDaysArray = new Array(firstDayIndex).fill(null); // Blank cells for offset
    const daysArray = new Array(days).fill(null).map((_, index) => index + 1);
    setDaysInMonth([...blankDaysArray, ...daysArray]);
  }, [currentDate, year]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Calendar</h1>
          <p className="mt-4 text-lg md:text-xl">
            {month} {year}
          </p>
        </div>
      </header>

      {/* Calendar Section */}
      <section className="py-12 bg-gray-100 flex-grow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-7 gap-4">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="font-bold text-center">
                {day}
              </div>
            ))}
            {daysInMonth.map((day, index) => (
              <div
                key={index}
                className={`h-16 flex justify-center items-center rounded-md 
                ${day === today ? 'bg-blue-500 text-white font-bold' : 'bg-white'} 
                shadow-md border border-gray-300 hover:bg-blue-100 cursor-pointer`}
              >
                {day || ''}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="bg-gray-800 text-white text-center py-3 mt-auto">
        <p>© 2024 Your Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Calendar;
