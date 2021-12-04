import * as React from "react"
import Helmet from 'react-helmet'
import '../styles/main.scss'

import icon from '../images/icon.png'
import {
  Navbar,
  useGitHubRecentRepos,
  useBlogRecentPosts,
} from '../components'

import UplightPhoto from './works/images/uplight.jpg'
import BlankImage from './works/images/blank.png'

interface Activity {
  category: string
  title: string
  url: string
  date: string
}

export const activities: Activity[] = [
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: 'UIST 2021にて共著者としてデモ発表',
    url: 'https://dl.acm.org/doi/10.1145/3474349.3480207',
    date: '2021-10',
  },
  {
    category: 'ハッカソン',
    title: 'サポーターズ ウインターハッカソン vol.7，複数窓配信視聴を快適にするChrome拡張Spatial Volume Controllerをチーム開発，最優秀賞',
    url: 'https://talent.supporterz.jp/events/28d759c2-50b4-456d-889b-1f08abf6c053/',
    date: '2021-02',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: 'トリエ京王調布 こもれびテラスにてデモ展示',
    url: '#',
    date: '2020-12',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: '京王あそびの森 HUGHUGにてデモ展示',
    url: '#',
    date: '2020-09',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: '第188回HCI研究会にて共著者として採択（口頭発表）',
    url: '#',
    date: '2020-06',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: 'GDG DevFest Tokyo 2019にてデモ展示',
    url: '#',
    date: '2019-12',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: 'GUGEN 2019にてデモ展示',
    url: '#',
    date: '2019-12',
  },
  {
    category: '全周囲ディスプレイゲーム機UPLIGHT',
    title: 'TGS 2019 センス・オブ・ワンダーナイト 選考ブースにてデモ展示，Best Technological Game Award受賞',
    url: '#',
    date: '2019-09',
  },
]

// markup
const IndexPage: React.FC<{}> = () => {
  const {
    repos,
  } = useGitHubRecentRepos()
  const {
    posts,
  } = useBlogRecentPosts()

  return (
    <>
      <Helmet>
        <title>aoirint</title>
      </Helmet>
      <Navbar />
      <section className='section'>
          <div className='container'>
              <div className='columns is-vcentered'>
                <div className='column is-narrow'>
                  <img src={icon} alt="Logo image" className='image is-64x64 mr-4' />
                </div>
                <div className='column'>
                  <h1 className='title is-2'>
                      aoirint
                  </h1>
                  <p className='subtitle is-5'>
                      技術とさぶかる
                  </p>
                </div>
              </div>
              <div className='columns'>
                <div className='column'>
                  <h2 className='title is-4'>
                    Activity
                  </h2>

                  <a href="works/uplight/">
                    <div className="card mb-4">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={UplightPhoto} alt="UPLIGHT" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">UPLIGHT</p>
                            <p className="subtitle is-6">研究開発メンバー</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>


                  <a href="contribs/voicevox/">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by3">
                          <img src={BlankImage} alt="VOICEVOX" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">VOICEVOX</p>
                            <p className="subtitle is-6">レビュアー</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <ul>
                    {activities.map((activity) => (
                      <li className='mb-2'>
                        <a href={activity.url} target='_blank' className='mb-2'>
                          {activity.title}
                        </a>
                        <div className='is-size-7'>
                        {activity.category}, {activity.date}
                        </div>
                      </li>
                    ))}
                  </ul> */}
                </div>
                <div className='column'>
                  <h2 className='title is-4'>
                    Recent notes
                  </h2>
                  <ul>
                    {posts?.map((post) => (
                      <li className='mb-2'>
                        <a href={post.url} target='_blank' className='mb-2'>
                          {post.title}
                        </a>
                        <div className='is-size-7'>
                          {post.updatedAt != null ? (
                            <>
                              Updated: {post.updatedAt}
                            </>
                          ) : ''}
                          {post.createdAt != null && post.updatedAt != null ? ' (' : ''}
                          {post.createdAt != null ? (
                            <>
                              Created: {post.createdAt}
                            </>
                          ) : ''}
                          {post.createdAt != null && post.updatedAt != null ? ')' : ''}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='column'>
                  <h2 className='title is-4'>
                    Active repositories
                  </h2>
                  <ul>
                    {repos?.map((repo) => (
                      <li className='mb-2'>
                        <a href={repo.url} target='_blank' className='mb-2'>
                          {repo.title}
                        </a>
                        <div className='is-size-7'>
                          Updated: {repo.updatedAt} (Created: {repo.createdAt})
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default IndexPage
