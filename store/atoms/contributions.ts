import { atom } from "recoil";

export const issues = atom({
    key: "issues",
    default: {}
})

export const contributionsTab = atom({
    key: "opensourceTab",
    default: "Issues"
})

export const tabs = ["Issues", "Pulls"]