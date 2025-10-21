import * as React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export type TaskcompletionchartProps = {
  data: {
    day: string;
    yourTasks: number;
    partnerTasks: number;
  }[];
};

export const Taskcompletionchart = (props: TaskcompletionchartProps) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl border bg-card text-card-foreground">
      <div className="px-6 pt-6">
        <h4 className="text-lg font-semibold leading-none">
          Weekly Task Completion
        </h4>
      </div>

      <div className="px-6 pb-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={props.data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorYour" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPartner" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="yourTasks"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorYour)"
              name="Your Tasks"
            />
            <Area
              type="monotone"
              dataKey="partnerTasks"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPartner)"
              name="Partner Tasks"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
