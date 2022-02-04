import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
    Navbar,
} from '../../../components'

import FloorProjectionImage from '../images/floor_projection.jpg'

const FloorProjection: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>Kinectモーショントラッキングによる床プロジェクションゲーム</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Kinectモーショントラッキングによる床プロジェクションゲーム
                    </h1>
                    <p className='subtitle'>
                    </p>
                    <div className='contents'>
                        <img
                            src={FloorProjectionImage}
                            alt="Floor Projection Photo"
                        />
                        <p>
                            研究開発系サークル<a href="https://imedia-lab.net/">インタラクティブメディアラボ</a>にて、
                            チーム製作。
                        </p>
                        <p>
                            大学文化祭（調布祭）2017にて、教室展示した。
                        </p>
                        <p>
                            Unityなどを使用した。
                        </p>
                        <p>
                            開発メンバーとして、ゲームアプリケーションの一部開発を担当した。
                        </p>
                        <p>
                            GitHub Organization：<a href="https://github.com/imlGaze">https://github.com/imlGaze</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FloorProjection
