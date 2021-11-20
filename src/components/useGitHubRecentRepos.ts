import React from 'react'
import dayjs from 'dayjs'

export interface Repo {
    title: string
    url: string
    createdAt: string
    updatedAt: string
}

const useGitHubRecentRepos = () => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [repos, setRepos] = React.useState<Repo[]>(null)

    React.useEffect(() => {
      if (repos === null) {
        fetch('https://api.github.com/users/aoirint/repos?sort=updated&per_page=10')
        .then((data) => data.json())
        .then((data) => {
          const repos = data.map((repo): Repo => {
            const title = repo.full_name
            const url = repo.html_url

            const createdAt = dayjs(repo.created_at).format('YYYY-MM-DD')
            const updatedAt = dayjs(repo.updated_at).format('YYYY-MM-DD')

            return {
              title,
              url,
              createdAt,
              updatedAt,
            }
          })

          setRepos(repos)
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
      }
    })

    return {
        loading,
        repos,
    }
}

export default useGitHubRecentRepos
