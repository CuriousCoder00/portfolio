import { atom } from "recoil";

export const issues = atom({
    key: "issues",
    default: {}
})

export const contributionsTab = atom({
    key: "opensourceTab",
    default: "pulls"
})

export const tabs = [{ label: "Pull Requests", mode: "pulls" }, { label: "Issues", mode: "issues" }]