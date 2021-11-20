import * as React from "react"
import Helmet from "react-helmet"

import {
  Navbar,
  useGitHubRecentRepos,
} from '../components'

// markup
const IndexPage: React.FC<{}> = () => {
  const {
    repos,
  } = useGitHubRecentRepos()

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navbar />
      <section className='section'>
          <div className='container'>
              <h1 className='title is-2'>
                  aoirint
              </h1>
              <p className='subtitle is-5 is-spaced'>
                  技術とさぶかる
              </p>
              <h2 className='title is-4'>
                Recently updated repositories
              </h2>
              <ul>
                {repos?.map((repo) => (
                  <li className='mb-2'>
                    <a href={repo.url} target='_blank' className='mb-2'>
                      {repo.title}
                    </a>
                    <div className='is-size-7'>
                      Updated: {repo.updatedAt} (Created: {repo.createdAt})
                    </div>
                  </li>
                ))}
              </ul>
          </div>
      </section>
    </>
  )
}

export default IndexPage
