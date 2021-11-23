import React from 'react'
import icon from '../images/icon.png'

const Navbar: React.FC<{}> = () => {
  const [active, setActive] = React.useState<boolean>(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={icon} alt="Logo image" width="28" height="28" />
        </a>

        <a role="button" className={`navbar-burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => {
          setActive(!active)
        }}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${active ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/works/">
            Works
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="https://twitter.com/aoirint" target='_blank'>
                Twitter
              </a>
              <a className="navbar-item" href="https://github.com/aoirint" target='_blank'>
                GitHub
              </a>
              <a className="navbar-item" href="https://github.com/pulls?q=involves%3Aaoirint+-user%3Aaoirint" target='_blank'>
                GitHub Contribs
              </a>
              <a className="navbar-item" href="https://qiita.com/aoirint" target='_blank'>
                Qiita
              </a>
              <a className="navbar-item" href="https://blog.aoirint.com/" target='_blank'>
                技術ノート
              </a>
              <a className="navbar-item" href="https://aoirint.hatenablog.com/" target='_blank'>
                技術ノート（旧）
              </a>
              <a className="navbar-item" href="https://www.resume.id/aoirint" target='_blank'>
                resume.id
              </a>
              <a className="navbar-item" href="https://diary.aoirint.com/" target='_blank'>
                Diary
              </a>
              <a className="navbar-item" href="https://aoirint.hatenadiary.jp/" target='_blank'>
                Diary（旧）
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end" />
      </div>
    </nav>
  )
}

export default Navbar
