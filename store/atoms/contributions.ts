import { atom } from "recoil";

export const contributionsTab = atom({
    key: "opensourceTab",
    default: "issues"
})

export const tabs = ["issues", "pulls"]