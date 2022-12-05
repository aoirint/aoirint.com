import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
  Navbar,
} from '../../../components'

const ArtificialCharacters: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>GANによる人工言語向け架空文字生成</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            GANによる人工言語向け架空文字生成
          </h1>
          <p className='subtitle'>
          </p>
          <div className='contents'>
            <p>
              PBL講義<a href="http://pr.cei.uec.ac.jp/kobo2018/index.php">情報工学工房2018 テーマ「Pythonによる深層学習」</a>にて、
              個人製作。
            </p>
            <p>
              PyTorch、DCGANなどを使用した。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtificialCharacters
