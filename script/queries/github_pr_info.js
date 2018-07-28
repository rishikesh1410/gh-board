export const GITHUB_PR_INFO_QUERY = `
  query($owner: String!, $name: String!, $perPage: Int!, $before: String, $orderBy: IssueOrder!) {
    rateLimit {
      limit
      remaining
      resetAt
    }
    repository(owner:$owner, name:$name) {
      pullRequests(last:$perPage, before:$before, orderBy:$orderBy) {
        pageInfo {
          startCursor
          hasPreviousPage
        }
        nodes {
          title
          bodyText
          url
          number
          state
          reviews(first: 20) {
            totalCount
            nodes {
              comments(first: 100) {
                totalCount
                nodes {
                  id
                  url
                  bodyText
                  diffHunk
                  createdAt
                  lastEditedAt
                  author {
                    login
                    avatarUrl
                    ... on User {
                      name
                    }
                  }
                  reactionGroups {
                    content
                    createdAt
                  }
                }
              }
            }
          }
          comments(first:100) {
            totalCount
            nodes {
              id
              url
              bodyText
              createdAt
              lastEditedAt
              author {
                login
                avatarUrl
                ... on User {
                  name
                }
              }
              reactionGroups {
                content
                createdAt
              }
            }
          }
          milestone {
            title
            createdAt
            dueOn
            state
            url
            description
          }
          createdAt
          updatedAt
          closedAt
          author {
            login
            avatarUrl
          }
          assignees(first:1) {
            nodes {
              login
              avatarUrl
            }
          }
          labels(first:100) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }`;
