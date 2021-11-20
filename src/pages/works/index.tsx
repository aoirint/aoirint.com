import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
    Navbar,
} from '../../components'

const Works: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>aoirint's Works</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Works
                    </h1>
                    <p className='subtitle'>
                        作品とプロジェクト開発
                    </p>
                    <p>
                        aaaaa
                    </p>
                </div>
            </section>
        </>
    )
}

export default Works
