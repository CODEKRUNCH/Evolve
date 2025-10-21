import { CheckCircle, Clock, XCircle } from 'lucide-react';
import * as React from 'react';

export type ProgressbarProfileProps = {
  username: string;
  completionPercentage?: number;
  approvedCount: number;
  pendingCount: number;
  rejectedCount: number;
};

export const ProgressbarProfile = (props: ProgressbarProfileProps) => {
  let completionPercentage = props.completionPercentage || 0;
  if (completionPercentage < 0) completionPercentage = 0;
  if (completionPercentage > 100) completionPercentage = 100;

  return (
    <div
      data-slot="card"
      className="flex flex-1 flex-col gap-6 rounded-xl border bg-card text-card-foreground"
    >
      {/* Header */}
      <div
        data-slot="card-header"
        className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6"
      >
        <div className="flex items-center gap-3">
          <span
            data-slot="avatar"
            className="relative flex size-12 shrink-0 overflow-hidden rounded-full"
          >
            <span
              data-slot="avatar-fallback"
              className="flex size-full items-center justify-center rounded-full bg-muted"
            >
              A
            </span>
          </span>
          <div>
            <h4 data-slot="card-title" className="leading-none">
              {props.username}
            </h4>
            <p className="text-sm text-muted-foreground">Progress Overview</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        data-slot="card-content"
        className="space-y-4 px-6 [&:last-child]:pb-6"
      >
        {/* Progress Bar */}
        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm">Overall Completion</span>
            <span className="text-sm">{completionPercentage}%</span>
          </div>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            data-slot="progress"
            className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20"
          >
            <div
              data-slot="progress-indicator"
              className="h-full bg-primary transition-all"
              style={{ width: `${props.completionPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-green-500/10 p-3 text-center">
            <CheckCircle className="mx-auto mb-1 size-5 text-green-600" />
            <div className="text-xl">{props.approvedCount}</div>
            <p className="text-xs text-muted-foreground">Approved</p>
          </div>
          <div className="rounded-lg bg-yellow-500/10 p-3 text-center">
            <Clock className="mx-auto mb-1 size-5 text-yellow-600" />
            <div className="text-xl">{props.pendingCount}</div>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
          <div className="rounded-lg bg-red-500/10 p-3 text-center">
            <XCircle className="mx-auto mb-1 size-5 text-red-600" />
            <div className="text-xl">{props.rejectedCount}</div>
            <p className="text-xs text-muted-foreground">Rejected</p>
          </div>
        </div>
      </div>
    </div>
  );
};
