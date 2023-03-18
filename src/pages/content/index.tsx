import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
  Navbar,
} from '../../components'

import BlankImage from './images/blank.png'
import QiitaImage from './images/qiita.png'

interface ContentCard {
  title: string
  description: string
  image: any
  imageAlt: string
  url: string
}

const cards: ContentCard[] = [
  {
    title: 'えやみぐさ 技術ノート',
    description: 'プログラミングや電子工作に関する記事を投稿しています（2017年～）',
    image: BlankImage,
    imageAlt: 'Blank Image',
    url: 'https://blog.aoirint.com/channel/%E6%8A%80%E8%A1%93%E3%83%8E%E3%83%BC%E3%83%88/',
  },
  {
    title: 'Qiita @aoirint',
    description: 'プログラミングに関する記事を投稿しています（2020年）',
    image: QiitaImage,
    imageAlt: 'Qiita Icon',
    url: 'https://qiita.com/aoirint',
  },
  // {
  //   title: 'Wiki',
  //   description: '個人Wiki',
  //   image: BlankImage,
  //   imageAlt: 'Blank Image',
  //   url: 'https://wiki.aoirint.com',
  // },
]

const Contents: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>コンテンツ - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            コンテンツ
          </h1>
          <h2 className='subtitle is-6 mb-4'>
            技術情報の発信やエンターテインメントコンテンツの制作をしています
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
                          <a href={card.url} className="button is-primary">見てみる</a>
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

export default Contents
