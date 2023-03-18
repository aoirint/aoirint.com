import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
  Navbar,
} from '../../components'

import BlankImage from './images/blank.png'
import NextcloudImage from './images/nextcloud.svg'
import MastodonImage from './images/mastodon.svg'
import GiteaImage from './images/gitea.svg'

interface ServiceCard {
  title: string
  subtitle: string
  description: string
  image: any
  imageAlt: string
  url: string
}

const cards: ServiceCard[] = [
  {
    title: 'nalypoll.aoirint.com',
    subtitle: 'Nalypoll',
    description: 'Twitterの投票経過をグラフ化するWebアプリ',
    image: BlankImage,
    imageAlt: 'Blank Image',
    url: 'https://nalypoll.aoirint.com',
  },
  {
    title: 'mstdn.aoirint.com',
    subtitle: 'Mastodon',
    description: 'SNS（Fediverse）',
    image: MastodonImage,
    imageAlt: 'Mastodon Logo',
    url: 'https://mstdn.aoirint.com',
  },
  {
    title: 'gitea.aoirint.com',
    subtitle: 'Gitea',
    description: 'コードホスティング',
    image: GiteaImage,
    imageAlt: 'Gitea Logo',
    url: 'https://gitea.aoirint.com',
  },
  {
    title: 'nc.aoirint.com',
    subtitle: 'Nextcloud',
    description: 'クラウドストレージ',
    image: NextcloudImage,
    imageAlt: 'Nextcloud Logo',
    url: 'https://nc.aoirint.com',
  },
]

const Services: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>サービス - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            サービス
          </h1>
          <div className='columns is-multiline'>
            
          </div>
          <div className='columns is-multiline'>
            {cards.map((card) => (
              <div className='column is-half-desktop is-one-third-widescreen is-one-quarter-fullhd'>
                <a href={card.url}>
                  <div className='box'>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-1by1 is-64x64">
                          <img src={card.image} alt="{card.imageAlt}" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <h3 className='title is-4'>{card.title}</h3>
                          <h4 className='subtitle is-6 mb-2'>{card.subtitle}</h4>
                          <p>
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
