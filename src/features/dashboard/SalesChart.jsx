import styled from 'styled-components';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import DashboardBox from './DashboardBox';

function SalesChart({ bookings, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });

  const colors = {
    totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
    extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
    text: '#374151',
    background: '#fff',
  };

  return (
    <DashboardBox className="!col-span-full">
      <h2>
        Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}{' '}
      </h2>

      <div className="w-full overflow-x-auto lg:overflow-x-hidden">
        <div className="min-w-[500px] ">
          <ResponsiveContainer height={300} width="100%">
            <AreaChart data={data}>
              <XAxis
                dataKey="label"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <YAxis
                unit="$"
                tick={{ fill: colors.text }}
                tickLine={{ stroke: colors.text }}
              />
              <CartesianGrid strokeDasharray="4" />
              <Tooltip contentStyle={{ backgroundColor: colors.background }} />
              <Area
                dataKey="totalSales"
                type="monotone"
                stroke={colors.totalSales.stroke}
                fill={colors.totalSales.fill}
                strokeWidth={2}
                name="Total sales"
                unit="$"
              />
              <Area
                dataKey="extrasSales"
                type="monotone"
                stroke={colors.extrasSales.stroke}
                fill={colors.extrasSales.fill}
                strokeWidth={2}
                name="Extras sales"
                unit="$"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardBox>
  );
}

export default SalesChart;
