import React from 'react';
import { CheckCircle, GitPullRequest, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  state: 'open' | 'closed';
  isMerged?: boolean;
}

export function StatusBadge({ state, isMerged }: StatusBadgeProps) {
  if (isMerged) {
    return (
      <span className="flex items-center gap-1.5 text-purple-600">
        <CheckCircle size={16} />
        <span className="text-sm font-medium">Merged</span>
      </span>
    );
  }

  if (state === 'open') {
    return (
      <span className="flex items-center gap-1.5 text-green-600">
        <GitPullRequest size={16} />
        <span className="text-sm font-medium">Open</span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1.5 text-red-600">
      <XCircle size={16} />
      <span className="text-sm font-medium">Closed</span>
    </span>
  );
}