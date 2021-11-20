import React from 'react'
import Helmet from 'react-helmet'
import '../styles/main.scss'

import {
    MDXRendererProps,
} from 'gatsby-plugin-mdx'

import {
  Navbar,
} from '../components'

const MdxLayout: React.FC<MDXRendererProps> = ({
    children,
}) => {
    return (
        <>
            <Helmet>
                <title>aoirint's Works</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                   {children}
                </div>
            </section>
        </>
    )
}

export default MdxLayout
