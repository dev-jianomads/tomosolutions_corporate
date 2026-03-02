"use client";

import { ScrollFade } from "./ScrollFade";

const NODES = [
  "Meeting",
  "Follow-up",
  "Next Step",
  "DDQ",
  "Re-engagement",
];

export function ExecutionLine() {
  return (
    <ScrollFade>
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-0">
        {NODES.map((label, index) => (
          <div
            key={label}
            className="flex flex-col md:flex-row items-center md:items-stretch"
          >
            <div className="border border-primary/40 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              {label}
            </div>
            {index < NODES.length - 1 && (
              <>
                <div className="md:hidden w-px h-4 bg-primary/30 flex-shrink-0" />
                <div className="hidden md:block w-8 h-px bg-primary/30 flex-shrink-0 self-center" />
              </>
            )}
          </div>
        ))}
      </div>
    </ScrollFade>
  );
}
