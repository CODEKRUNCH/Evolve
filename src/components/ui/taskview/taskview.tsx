import * as React from "react";

type Comment = {
  author: string;
  content: string;
  timestamp: string;
};

export type TaskviewProps = {
  onClose?: () => void;
  title: string;
  description?: string;
  status?: string;
  dueDate?: string;
  category?: string;
  priority?: string;
  proofOfCompletion?: string;
  comments?: Comment[];
};

export const Taskview = (props: TaskviewProps) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out 
                 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
                 fixed top-[50%] left-[50%] z-50 grid w-full 
                 translate-x-[-50%] translate-y-[-50%] gap-4 
                 rounded-lg border p-6 shadow-lg duration-200 
                 sm:max-w-lg max-w-2xl max-h-[80vh]"
      style={{ pointerEvents: "auto" }}
      tabIndex={-1}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <h2 className="text-lg leading-none font-semibold">
          {props.title}
        </h2>
      </div>

      {/* Scrollable content */}
      <div dir="ltr" className="relative max-h-[60vh] pr-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Description */}
          <div>
            <p className="text-sm">
              {props.description}
            </p>
          </div>

          <hr className="bg-border h-px w-full" />

          {/* Task Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit bg-blue-500/10 text-blue-700 border-blue-500/20">
                {props.status}
              </span>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Due Date</p>
              <p className="text-sm">{props.dueDate}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Category</p>
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit bg-indigo-500/10 text-indigo-700 border-indigo-500/20">
               {props.category}
              </span>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Priority</p>
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit bg-red-500/10 text-red-700 border-red-500/20">
                {props.priority}
              </span>
            </div>
          </div>

          <hr className="bg-border h-px w-full" />

          {/* Proof of completion */}
          <div>
            <p className="text-sm mb-2">Proof of Completion</p>
            <div className="bg-muted p-3 rounded-lg text-sm">
              {props.proofOfCompletion}
            </div>
          </div>

          <hr className="bg-border h-px w-full" />

          {/* Quick reactions */}
          <div>
            <p className="text-sm mb-2">Quick Reactions</p>
            <div className="flex gap-2">
              {["👍", "❤️", "🎉", "🔥", "💪"].map((emoji) => (
                <button
                  key={emoji}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium
                             transition-all disabled:pointer-events-none disabled:opacity-50 border 
                             bg-background text-foreground hover:bg-accent hover:text-accent-foreground 
                             h-8 rounded-md gap-1.5 px-3"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <hr className="bg-border h-px w-full" />

          {/* Comments */}
          <div>
            <h4 className="mb-3">Comments (1)</h4>
            <div className="space-y-3 mb-4">
              <div className="flex gap-3">
                <span className="relative size-10 shrink-0 overflow-hidden rounded-full h-8 w-8 bg-muted flex items-center justify-center">
                  {props.comments?.[0]?.author.charAt(0)}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Sarah Miller</span>
                    <span className="text-xs text-muted-foreground">
                      {props.comments?.[0]?.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {props.comments?.[0]?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={props.onClose}
        className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity 
                   hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-ring 
                   focus:outline-hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};
