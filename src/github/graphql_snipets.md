# GraphQL snipets

## ユーザのレポジトリ情報をぶっこ抜く

[リファレンス: Repository](https://developer.github.com/v4/object/repository/)

### レポジトリの主要言語を取る

```
{
  search(query: "user:tubone24", type: REPOSITORY, first: 100) {
    repositoryCount
    pageInfo {
      endCursor
      startCursor
    }
    edges {
      node {
        ... on Repository {
          id
          name
          createdAt
          description
          isArchived
          isPrivate
          diskUsage
          url
          owner {
            login
            id
            __typename
            url
          }
          assignableUsers {
            totalCount
          }
          licenseInfo {
            key
          }
          languages (first: 100){
            pageInfo {
              endCursor
              startCursor
            }
            totalCount
            edges{
              node{
                name
              }
            }
          }
          primaryLanguage {
            name
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 10) {
                  totalCount
                  edges {
                    node {
                      ... on Commit {
                        committedDate
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
