import React from "react";
import {
  CircleAlert,
  Clock,
  Paperclip,
  MessageSquare,
  Eye,
} from "lucide-react";

type Reaction = { emoji: string; count: number };

export type TaskCardProps = {
  avatar?: string;
  title: string;
  description: string;
  status: string;
  category: string;
  priority: string;
  dueDate: string;
  reactions?: Reaction[];
  comments?: number;
  views?: number;
};

export const Taskbox: React.FC<TaskCardProps> = ({
  avatar = "A",
  title,
  description,
  status,
  category,
  priority,
  dueDate,
  reactions = [],
  comments = 0,
  views = 0,
}) => {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-4 hover:shadow-md transition-shadow">
      {/* Top section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-8 w-8 mt-1">
              <span className="bg-muted flex size-full items-center justify-center rounded-full">
                {avatar}
              </span>
            </span>

            {/* Task Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold">{title}</h4>
                <CircleAlert className="h-4 w-4 text-red-600" />
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <Badge text={status} color="blue" />
                <Badge text={category} color="indigo" />
                <Badge text={priority} color="red" />
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Due: {dueDate}
                </span>
                <Badge icon={<Paperclip className="h-3 w-3" />} text="Proof attached" />
              </div>

              {/* Reactions */}
              {reactions.length > 0 && (
                <div className="flex items-center gap-1 mt-2 flex-wrap">
                  {reactions.map((r, i) => (
                    <button
                      key={i}
                      className="border bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-md h-7 px-2 flex items-center gap-1 text-sm transition-all"
                    >
                      <span>{r.emoji}</span>
                      <span className="text-xs">{r.count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-2 flex-wrap">
        <button className="inline-flex items-center justify-center text-sm font-medium hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 transition-all">
          <MessageSquare className="h-4 w-4 mr-1" /> {comments}
        </button>
        <button className="inline-flex items-center justify-center text-sm font-medium hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3 transition-all">
          <Eye className="h-4 w-4" /> {views}
        </button>
      </div>
    </div>
  );
};

const Badge = ({
  text,
  color,
  icon,
}: {
  text: string;
  color?: string;
  icon?: React.ReactNode;
}) => {
  const colorClasses =
    color === "blue"
      ? "bg-blue-500/10 text-blue-700 border-blue-500/20"
      : color === "indigo"
      ? "bg-indigo-500/10 text-indigo-700 border-indigo-500/20"
      : color === "red"
      ? "bg-red-500/10 text-red-700 border-red-500/20"
      : "bg-muted text-foreground border-border";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium gap-1 ${colorClasses}`}
    >
      {icon}
      {text}
    </span>
  );
};
