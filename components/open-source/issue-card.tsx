import { GithubIssueResponse } from "@/lib/types/issueRes.types";
import { MessageSquare } from "lucide-react";
import React from "react";
import { StatusBadge } from "./status-badge";
import Link from "next/link";
import { Labels } from "./labels";
import { getTimeAgo } from "@/lib/utils";
import { Reactions } from "./reactions";
import Image from "next/image";

interface IssueCardProps {
  issue: GithubIssueResponse;
}

const IssueCard = ({ issue }: IssueCardProps) => {
  const repoName = issue.repository_url.split("/").slice(-2).join("/");
  const isMerged = issue.pull_request?.merged_at != null;
  return (
    <div className="flex items-start justify-start shadow-sm dark:bg-black/70 dark:shadow-slate-700 shadow-slate-300 w-full p-4 gap-2 border rounded-xl hover:dark:bg-zinc-950 hover:bg-slate-200 transition-all hover:scale-105 duration-300">
      <Link
        href={issue.user.html_url}
        target="_blank"
        className="flex-shrink-0"
      >
        <Image
          src={issue.user.avatar_url}
          alt={`${issue.user.login}'s avatar`}
          className="w-12 h-12 rounded-full"
          width={100}
          height={100}
        />
      </Link>
      <div className="w-full text-wrap flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <Link
              target="_blank"
              href={issue.html_url}
              className="font-bold truncate text-wrap transition-all hover:underline"
            >
              {issue.title} #{issue.number}
            </Link>
            <Link
              target="_blank"
              href={`https://github.com/${repoName}`}
              className="mt-1 text-sm text-slate-500 dark:hover:text-slate-300 hover:text-slate-700 transition-colors duration-200"
            >
              {repoName}
            </Link>
          </div>
          <StatusBadge
            state={issue.state as "open" | "closed"}
            isMerged={isMerged}
          />
        </div>
        {issue.body && (
          <p className="text-slate-500">
            {issue.body.length > 200
              ? issue.body.slice(0, 200) + "..."
              : issue.body.length < 30
              ? null
              : issue.body}
          </p>
        )}
        <Labels labels={issue.labels} />
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MessageSquare size={16} />
            {issue.comments}
          </span>
          <span>
            opened {getTimeAgo(issue.created_at)} by {issue.user.login}
          </span>
        </div>
        <Reactions reactions={issue.reactions} />
      </div>
    </div>
  );
};

export default IssueCard;
