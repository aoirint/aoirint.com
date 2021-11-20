import * as React from "react"
import Helmet from "react-helmet"

import Navbar from '../components/navbar'

// markup
const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navbar />
      <section className='section'>
          <div className='container'>
              <h1 className='title'>
                  aoirint
              </h1>
              <p className='subtitle'>
                  技術とさぶかる
              </p>
          </div>
      </section>
    </>
  )
}

export default IndexPage
