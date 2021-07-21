import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css';

const Chart = ({ title, grid, data, dataKey }) => {
  
  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line dataKey={dataKey} type='monotone' stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' /> }
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
