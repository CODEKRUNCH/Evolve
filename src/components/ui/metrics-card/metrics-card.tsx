import * as React from 'react';

export type MetricsCardProps = {
  title?: string;
  value?: number | string;
  change?: string;
};

export const MetricsCard = (props: MetricsCardProps) => {
  return (
    <div className="flex w-max flex-col gap-6 rounded-xl border bg-card text-card-foreground">
      <div
        data-slot="card-header"
        className="has-data-[slot=card-action]:grid-cols-[1fr_auto] flex flex-row items-center justify-between gap-1.5 px-6 pb-2 pt-6"
      >
        <h4 data-slot="card-title" className="text-sm text-muted-foreground">
          {props.title}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-muted-foreground"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      </div>

      <div data-slot="card-content" className="px-6 last:pb-6">
        <div className="text-2xl">{props.value}</div>
        <p className="mt-1 text-xs text-green-600">{props.change}</p>
      </div>
    </div>
  );
};
