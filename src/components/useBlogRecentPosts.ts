import React from 'react'
import dayjs from 'dayjs'

export interface Post {
    title: string
    url: string
    createdAt: string
    updatedAt: string
}

const useBlogRecentPosts = () => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [posts, setPosts] = React.useState<Post[]>(null)

    if (posts === null) {
        fetch('https://blog.aoirint.com/atom.xml')
            .then((data) => data.text())
            .then((data) => {
                const parser = new DOMParser()

                const xml = parser.parseFromString(data, 'text/xml')
                const entries = [...xml.querySelectorAll('entry')]
                const posts = entries.map((entry) => {
                    const title = entry.querySelector('title').textContent
                    const url = entry.querySelector('link').getAttribute('href')

                    const createdAt = dayjs(entry.querySelector('published').textContent).format('YYYY-MM-DD')
                    const updatedAt = dayjs(entry.querySelector('updated').textContent).format('YYYY-MM-DD')

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

    return {
        loading,
        posts,
    }
}

export default useBlogRecentPosts
