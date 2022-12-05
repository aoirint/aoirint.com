import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
  Navbar,
} from '../../../components'

import TabletopEduImage from '../images/tabletop_edu.jpg'

const TabletopEdu: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>テーブルトップディスプレイを活用したグループプログラミング学習ツール</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            テーブルトップディスプレイを活用したグループプログラミング学習ツール
          </h1>
          <p className='subtitle'>
          </p>
          <div className='contents'>
            <img
              src={TabletopEduImage}
              alt="Workshop Photo"
            />
            <p className='mb-4'>
              （画像は前身となるシステムを利用したプログラミングワークショップの様子）
            </p>
            <p>
              研究開発系サークル<a href="https://imedia-lab.net/">インタラクティブメディアラボ</a>にて、
              チーム製作。
            </p>
            <p>
              <a href="https://www.uec.ac.jp/news/announcement/2018/20180627_1107.html">UECものづくりコンテスト2018</a>にて、株式会社フローベル賞を受賞。
            </p>
            <p>
              テーブルトップディスプレイシステム PacPac、Unity、Processing、Node.js / express / socket.ioなどを使用した。
            </p>
            <p>
              開発メンバーとして、サーバサイドの開発を担当した。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TabletopEdu
