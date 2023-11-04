import React, { useEffect, useState } from 'react';

type Order = {
  id: number,
  name: string,
  date: string
}

const BirthdayForm = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, date }),
    })
      .then(response => response.json())
      .then(data => setOrders(prevOrders => [...prevOrders, data]));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-5">
      <h2 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Birthday Form
      </h2>
      <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-md px-8 py-6">
        <label className="text-gray-700 dark:text-gray-200">Name</label>
        <input className="mt-2 mb-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
        <label className="text-gray-700 dark:text-gray-200">Date of Birth</label>
        <input className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md px-3 py-2" type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default BirthdayForm;