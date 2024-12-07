import { Label } from "@/lib/types/issueRes.types";
import React from "react";

interface LabelsProps {
  labels: Label[];
}

export function Labels({ labels }: LabelsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label.id}
          className="px-2 py-0.5 text-xs font-medium rounded-full"
          style={{
            backgroundColor: `#${label.color}`,
            color: parseInt(label.color, 16) > 0xffffff / 2 ? "#000" : "#fff",
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}
