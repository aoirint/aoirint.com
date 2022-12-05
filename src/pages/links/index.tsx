import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/main.scss'

import {
  Navbar,
} from '../../components'

const LinksPage: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>リンク集 - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title is-3 mb-6'>
            リンク集
          </h1>
          <p className='mt-2 mb-6'>
            リンクの追加・変更・削除などは、
            <a href="https://github.com/aoirint/aoirint.com/issues">Issues</a>、
            <a href="https://github.com/aoirint/aoirint.com/pulls">Pull requests</a>、
            その他連絡先までお願いします。
          </p>
          <div className='columns is-multiline is-mobile'>
            <div className='column is-12 my-2'>
              <h2 className='title is-4 mt-6 mb-4'>
                個人サイト
              </h2>
              <table className='table'>
                <tr>
                  <th className='is-vcentered py-2'>
                    リンク
                  </th>
                  <th className='is-vcentered py-2'>
                    管理人
                  </th>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    <a href='https://www.yude.jp/'>
                      <StaticImage src='./banners/yude_jp.png' alt='yude.jpのバナー画像' title='yude.jp' />
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    yude さん
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    <a href='https://pickledchair.com/'>
                      SuitCase's Site
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    SuitCase さん
                  </td>
                </tr>
              </table>
            </div>
            <div className='column is-12 my-2'>
              <h2 className='title is-4 mt-6 mb-4'>
                ソフトウェア
              </h2>
              <table className='table'>
                <tr>
                  <th className='is-vcentered py-2'>
                    ジャンル
                  </th>
                  <th className='is-vcentered py-2'>
                    リンク
                  </th>
                  <th className='is-vcentered py-2'>
                    管理人
                  </th>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    音声合成ソフトウェア
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://voicevox.hiroshiba.jp/'>
                      VOICEVOX
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    VOICEVOX Organization
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    プログラミング言語
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://www.python.org/'>
                      Python
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    Python Software Foundation
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    JavaScript 環境
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://nodejs.org/'>
                      Node.js
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    OpenJS Foundation
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    Webフレームワーク
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://www.gatsbyjs.com/'>
                      Gatsby
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    Gatsby, Inc.
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    GPGPU
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://developer.nvidia.com/'>
                      NVIDIA Developer
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    NVIDIA Corporation
                  </td>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    GPGPU
                  </td>
                  <td className='is-vcentered py-4'>
                    <a href='https://pytorch.org/'>
                      PyTorch
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    PyTorch Foundation
                  </td>
                </tr>
              </table>
            </div>
            <div className='column is-12 my-2'>
              <h2 className='title is-4 mt-6 mb-4'>
                キャラクター
              </h2>
              <table className='table'>
                <tr>
                  <th className='is-vcentered py-2'>
                    リンク
                  </th>
                  <th className='is-vcentered py-2'>
                    管理人
                  </th>
                </tr>
                <tr>
                  <td className='is-vcentered py-4'>
                    <a href='https://zunko.jp/'>
                      東北ずん子 公式HP
                    </a>
                  </td>
                  <td className='is-vcentered py-4'>
                    SSS LLC
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LinksPage
