export const getIssues = async () => {
    const res = await fetch("https://api.github.com/search/issues?q=author:username");
    return res;
}