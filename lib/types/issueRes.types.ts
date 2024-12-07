export interface GithubIssueResponse {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    user: User;
    labels: Label[];
    state: string;
    locked: boolean;
    assignee: Assignee | null;
    assignees: Assignee[];
    milestone: Milestone | null;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    author_association: string;
    active_lock_reason: string | null;
    draft?: boolean;
    pull_request?: PullRequest | null;
    body: string | null;
    reactions: Reactions;
    timeline_url: string;
    performed_via_github_app: string | null;
    state_reason: string | null;
    score: number;
}

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type?: string; // Optional based on input
    site_admin: boolean;
}

export interface Label {
    id?: number;
    node_id?: string;
    url?: string;
    name?: string;
    description?: string;
    color: string;
    default?: boolean;
}

export interface Assignee {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Milestone {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    number: number;
    state: string;
    title: string;
    description: string;
    creator: User;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    updated_at: string;
    due_on: string | null;
    closed_at: string | null;
}

export interface PullRequest {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    merged_at: string | null;
}

export interface Reactions {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}
