"use client";
import IssueCard from "@/components/open-source/issue-card";
import { issues as data } from "@/data/opensource/data";
import { contributionsTab } from "@/store/atoms/contributions";
import { useRecoilValue } from "recoil";

const OpenSource = () => {
  const tab = useRecoilValue(contributionsTab);
  const issues = data.items.filter((item) => {
    const urlParts = item.html_url.split("/");
    const type = urlParts[urlParts.length - 2];
    return type === "issues";
  });
  const pulls = data.items.filter((item) => {
    const urlParts = item.html_url.split("/");
    const type = urlParts[urlParts.length - 2];
    return type === "pull";
  });
  return (
    <div className="mx-auto w-full flex gap-3 items-start justify-start pt-36 px-2">
      {tab === "Issues" && (
        <div className="flex flex-col items-start justify-start gap-5">
          {issues.map((issue, idx) => (
            <IssueCard issue={issue} />
          ))}
        </div>
      )}
      {tab === "Pulls" && (
        <div className="flex flex-col items-start justify-start gap-5">
          {pulls.map((issue, idx) => (
            <IssueCard issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OpenSource;