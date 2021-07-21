import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css';

const Chart = () => {
  const data = [
    {
      name: 'Jan',
      'Active User': 4000,
    },
    {
      name: 'Feb',
      'Active User': 3000,
    },
    {
      name: 'Mar',
      'Active User': 2000,
    },
    {
      name: 'Apr',
      'Active User': 2780,
    },
    {
      name: 'May',
      'Active User': 1890,
    },
    {
      name: 'Jun',
      'Active User': 2390,
    },
    {
      name: 'Jul',
      'Active User': 3490,
    },
    {
      name: 'Aug',
      'Active User': 3490,
    },
    {
      name: 'Sep',
      'Active User': 3490,
    },
    {
      name: 'Oct',
      'Active User': 3490,
    },
    {
      name: 'Nov',
      'Active User': 3490,
    },
    {
      name: 'Dec',
      'Active User': 3490,
    },
  ];
  return (
    <div className='chart'>
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line dataKey='Active User' type='monotone' stroke='#5550bd' />
          <Tooltip />
          <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
