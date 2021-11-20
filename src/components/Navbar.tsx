import React from 'react'
import icon from '../images/icon.png'

const Navbar: React.FC<{}> = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img src={icon} alt="Logo image" width="28" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
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
                            <a className="navbar-item" href="https://aoirint.hatenablog.com/" target='_blank'>
                                はてなブログ
                            </a>
                            <a className="navbar-item" href="https://blog.aoirint.com/" target='_blank'>
                                技術ブログ
                            </a>
                            <a className="navbar-item" href="https://www.resume.id/aoirint" target='_blank'>
                                resume.id
                            </a>
                            <a className="navbar-item" href="https://vent.aoirint.com/" target='_blank'>
                                Diary
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
