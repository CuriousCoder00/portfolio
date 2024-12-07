import React from "react";
import {
  Heart,
  ThumbsUp,
  ThumbsDown,
  Laugh,
  PartyPopper,
  HelpCircle,
  Rocket,
  Eye,
} from "lucide-react";
import { Reactions as GithubReactions } from "@/lib/types/issueRes.types";

interface ReactionProps {
  count: number;
  icon: React.ReactNode;
}

function Reaction({ count, icon }: ReactionProps) {
  if (count === 0) return null;

  return (
    <span className="flex items-center gap-1 text-gray-600">
      {icon}
      <span className="text-xs">{count}</span>
    </span>
  );
}

export function Reactions({ reactions }: { reactions: GithubReactions }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Reaction count={reactions["+1"]} icon={<ThumbsUp size={14} />} />
      <Reaction count={reactions["-1"]} icon={<ThumbsDown size={14} />} />
      <Reaction count={reactions.laugh} icon={<Laugh size={14} />} />
      <Reaction count={reactions.hooray} icon={<PartyPopper size={14} />} />
      <Reaction count={reactions.confused} icon={<HelpCircle size={14} />} />
      <Reaction count={reactions.heart} icon={<Heart size={14} />} />
      <Reaction count={reactions.rocket} icon={<Rocket size={14} />} />
      <Reaction count={reactions.eyes} icon={<Eye size={14} />} />
    </div>
  );
}
