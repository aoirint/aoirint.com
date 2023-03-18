import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import icon from '../images/icon.png'

const Navbar: React.FC<{}> = () => {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <>
      <section style={{ paddingTop: '3.25rem' }}>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={icon} alt="Logo image" width="28" height="28" />
            </a>

            <a role="button" className={`navbar-burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasic" onClick={() => {
              setActive(!active)
            }}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasic" className={`navbar-menu ${active ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                ホーム
              </Link>

              <Link className="navbar-item" to="/software/">
                ソフトウェア
              </Link>

              <Link className="navbar-item" to="/content/">
                コンテンツ
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  その他
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/info/">
                    おしらせ
                  </Link>

                  <Link className="navbar-item" to="/service/">
                    サービス
                  </Link>

                  <Link className="navbar-item" to="/activity/">
                    作品ギャラリー
                  </Link>

                  <Link className="navbar-item" to="/profile/">
                    プロフィール
                  </Link>

                  <hr className='navbar-divider' />

                  <Link className="navbar-item" to="/links/">
                    リンク集
                  </Link>

                  <a className="navbar-item" href="https://status.aoirint.com">
                    サービスの稼働状況
                  </a>

                  <Link className="navbar-item" to="/minecraft/">
                    Minecraftサーバーの稼働状況
                  </Link>

                  <hr className='navbar-divider' />

                  <h4 className='title is-7 mx-2 mt-4 mb-2'>ソーシャル</h4>

                  <a className="navbar-item" href="https://github.com/pulls?q=involves%3Aaoirint+-user%3Aaoirint">
                    GitHub上の活動を検索
                  </a>

                  <a className="navbar-item" rel="me" href="https://qiita.com/aoirint">
                    Qiita @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://mstdn.aoirint.com/@aoirint">
                    Mastodon @aoirint@mstdn.aoirint.com
                  </a>

                  <a className="navbar-item" rel="me" href="https://pypi.org/user/aoirint/">
                    PyPI @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://hub.docker.com/u/aoirint">
                    Docker Hub @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://pub.dev/publishers/aoirint.com">
                    pub.dev aoirint.com (未使用)
                  </a>

                  <a className="navbar-item" rel="me" href="https://zenn.dev/aoirint">
                    Zenn @aoirint (未使用)
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <a className="navbar-item" rel="me" href="https://twitter.com/aoirint">
                Twitter
              </a>
              <a className="navbar-item" rel="me" href="https://github.com/aoirint">
                GitHub
              </a>
              <a className="navbar-item" href="https://blog.aoirint.com/">
                Blog
              </a>
              <a className="navbar-item" href="https://wiki.aoirint.com/">
                Wiki
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
