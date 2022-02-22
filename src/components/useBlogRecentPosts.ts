import React from 'react'
import dayjs from 'dayjs'

export interface Post {
    title: string
    url: string
    createdAt?: string
    updatedAt?: string
}

const useBlogRecentPosts = () => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [posts, setPosts] = React.useState<Post[]>(null)

    React.useEffect(() => {
      if (posts === null) {
        fetch('https://blog.aoirint.com/rss.xml')
        .then((data) => data.text())
        .then((data) => {
          const parser = new DOMParser()

          const xml = parser.parseFromString(data, 'text/xml')
          const entries = [...xml.querySelectorAll('item')]
          const posts = entries.map((entry) => {
            const title = entry.querySelector('title').textContent
            const url = entry.querySelector('link').textContent

            const pubDate = entry.querySelector('pubDate')?.textContent ?? ''
            const atomUpdated = entry.getElementsByTagName('atom:updated')?.[0]?.textContent ?? ''

            const createdAt = pubDate !== '' ? dayjs(pubDate).format('YYYY-MM-DD') : undefined
            const updatedAt = atomUpdated !== '' ? dayjs(atomUpdated).format('YYYY-MM-DD') : undefined

            return {
              title,
              url,
              createdAt,
              updatedAt,
            }
          })

          setPosts(posts)
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
      }
    })

    return {
        loading,
        posts,
    }
}

export default useBlogRecentPosts
