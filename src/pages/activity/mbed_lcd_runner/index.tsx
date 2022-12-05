import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
  Navbar,
} from '../../../components'

const MbedLcdRunner: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>mBed LCD Runner</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            mBed LCD Runner
          </h1>
          <p className='subtitle'>
            1ボタンキャラクタディスプレイ障害物避けゲーム
          </p>
          <div className='contents'>
            <p>
              高校の部活動にて、
              チーム製作。
            </p>
            <p>
              高校文化祭（2016）にて展示した。
            </p>
            <p>
              mBed、C++、キャラクタディスプレイなどを使用した。
            </p>
            <p>
              開発メンバーとして、主要なプログラムの開発を担当した。
            </p>
            <p>
              開発途中のサルベージ版プログラム：<a href="https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c">https://gist.github.com/aoirint/d6bd55c0f4f02582ae7c4069b6486e4c</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MbedLcdRunner
