import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
  Navbar,
} from '../../components'

import BlankImage from './images/blank.png'
import SyosetuYomicopyExtensionImage from './images/syosetu-yomicopy-extension.png'
import TweetdeckVoicevoxExtensionImage from './images/tweetdeck_voicevox_extension.png'

interface SoftwareCard {
  title: string
  description: string
  image: any
  imageAlt: string
  useUrl: string | null
  sourceCodeUrl: string | null
  detailUrl: string | null
}

const cards: SoftwareCard[] = [
  {
    title: 'Nalypoll',
    description: 'Twitterの投票経過をグラフ化するWebアプリ',
    image: BlankImage,
    imageAlt: 'Blank Image',
    useUrl: 'https://nalypoll.aoirint.com',
    sourceCodeUrl: 'https://github.com/aoirint/nalypoll',
    detailUrl: null,
  },
  {
    title: 'Syosetu Yomi Copy Extension',
    description: '小説家になろうの小説ページを、音声合成ソフトによる読み上げ用に整形してクリップボードにコピーするためのChrome拡張機能',
    image: SyosetuYomicopyExtensionImage,
    imageAlt: 'Syosetu Yomi Copy Extension Icon',
    useUrl: 'https://chrome.google.com/webstore/detail/jkncjdlhbkikihjcokpbgijggimlmmoc',
    sourceCodeUrl: 'https://github.com/aoirint/syosetu-yomicopy-extension',
    detailUrl: null,
  },
  {
    title: 'TweetDeck VOICEVOX Extension',
    description: 'TweetDeckのカラムに流れるツイートをVOICEVOXに読み上げさせるChrome拡張機能',
    image: TweetdeckVoicevoxExtensionImage,
    imageAlt: 'TweetDeck VOICEVOX Extension Icon',
    useUrl: 'https://chrome.google.com/webstore/detail/cekkbogfkgichpacgbdddchpahpkmldl',
    sourceCodeUrl: 'https://github.com/aoirint/tweetdeck_voicevox_extension',
    detailUrl: null,
  },
  {
    title: 'MATV Tool',
    description: 'マルチオーディオトラック動画ファイルの簡易編集コマンドラインツール',
    image: BlankImage,
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/matvtoolpy/blob/main/README.md#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB',
    sourceCodeUrl: 'https://github.com/aoirint/matvtoolpy',
    detailUrl: null,
  },
  {
    title: 'PSDLayer2Dir',
    description: 'PSDファイルのレイヤー構造＋画像をディレクトリ構造＋PNGとしてダンプするコマンドラインツール',
    image: BlankImage,
    imageAlt: 'Blank Image',
    useUrl: 'https://github.com/aoirint/psdlayer2dirpy/blob/main/README.md#usage',
    sourceCodeUrl: 'https://github.com/aoirint/psdlayer2dirpy',
    detailUrl: null,
  },
  {
    title: 'Among Us Range',
    description: 'Among Usのレンジ設定のスクリーンショット集',
    image: BlankImage,
    imageAlt: 'Blank Image',
    useUrl: 'https://aoirint.github.io/among_us_range/',
    sourceCodeUrl: 'https://github.com/aoirint/among_us_range',
    detailUrl: null,
  },
]

const Softwares: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>ソフトウェア - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            ソフトウェア
          </h1>
          <h2 className='subtitle is-6 mb-4'>
            WebアプリやChrome拡張機能、生産性向上ツールを開発しています
          </h2>
          <div className='columns is-multiline'>
            {cards.map((card) => (
              <div className='column is-full is-half-desktop'>
                <div className='box'>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-1by1 is-64x64">
                        <img src={card.image} alt="{card.imageAlt}" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <h3 className='title is-4 mb-2'>{card.title}</h3>
                        <p className='mb-3'>
                          {card.description}
                        </p>
                        <div className='buttons'>
                          {card.useUrl != null ? (
                            <a href={card.useUrl} className="button is-primary">使ってみる</a>
                          ) : ''}
                          {card.sourceCodeUrl != null ? (
                            <a href={card.sourceCodeUrl} className="button is-light">ソースコード</a>
                          ) : ''}
                          {card.detailUrl != null ? (
                            <a href={card.detailUrl} className="button is-info">詳細</a>
                          ) : ''}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Softwares
