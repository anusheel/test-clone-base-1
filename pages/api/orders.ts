import type { NextApiRequest, NextApiResponse } from 'next'

type Order = {
  id: number,
  name: string,
  date: string
}

let orders: Order[] = [
  { id: 1, name: 'John Doe', date: '2022-01-01' },
  // Add more orders here
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[] | Order>
) {
  if (req.method === 'GET') {
    res.status(200).json(orders)
  } else if (req.method === 'POST') {
    const newOrder: Order = {
      id: orders.length + 1,
      name: req.body.name,
      date: req.body.date
    }
    orders.push(newOrder)
    res.status(201).json(newOrder)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}