import React from 'react'
import Helmet from 'react-helmet'
import '../styles/main.scss'

import {
    MDXProvider
} from '@mdx-js/react'
import {
    MDXRendererProps,
} from 'gatsby-plugin-mdx'

import {
  Navbar,
} from '../components'

const MdxLayout: React.FC<MDXRendererProps> = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.pageContext.frontmatter.title}</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <MDXProvider
                        components={{
                            h1: props => <h1 {...props} className='title is-3' />,
                            h2: props => <h2 {...props} className='title is-4' />,
                            h3: props => <h3 {...props} className='title is-5' />,
                        }}
                    >
                        {props.children}
                    </MDXProvider>
                </div>
            </section>
        </>
    )
}

export default MdxLayout
