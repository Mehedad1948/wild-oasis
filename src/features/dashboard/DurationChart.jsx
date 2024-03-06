import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import DashboardBox from './DashboardBox';


const startDataLight = [
  {
    duration: '1 night',
    value: 0,
    color: '#ef4444',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#f97316',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#eab308',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#84cc16',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#22c55e',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#14b8a6',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#3b82f6',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#a855f7',
  },
];

const startDataDark = [
  {
    duration: '1 night',
    value: 0,
    color: '#b91c1c',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#c2410c',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#a16207',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#4d7c0f',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#15803d',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#0f766e',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#1d4ed8',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#7e22ce',
  },
];

function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, '1 night');
      if (num === 2) return incArrayValue(arr, '2 nights');
      if (num === 3) return incArrayValue(arr, '3 nights');
      if ([4, 5].includes(num)) return incArrayValue(arr, '4-5 nights');
      if ([6, 7].includes(num)) return incArrayValue(arr, '6-7 nights');
      if (num >= 8 && num <= 14) return incArrayValue(arr, '8-14 nights');
      if (num >= 15 && num <= 21) return incArrayValue(arr, '15-21 nights');
      if (num >= 21) return incArrayValue(arr, '21+ nights');
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function DurationChart({ confirmedStays }) {
  const data = prepareData(startDataLight, confirmedStays)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const innerRadius = screenWidth < 600 ? 40 : 75;
  const outerRadius = screenWidth < 600 ? 60 : 100;

  return (
    <DashboardBox className='col-span-2 px-4 py-3 md:px-8 md:py-6 h-full'>
      <h2>Staty duration summary</h2>
      <ResponsiveContainer className='overflow-visible !h-52' width='100%'>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cx="45%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                key={entry.duration}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
          <Legend
          
            verticalAlign="middle"
            align="right"
            width="40%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default DurationChart;
