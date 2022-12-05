import * as React from 'react'
import Helmet from 'react-helmet'
import '../styles/main.scss'

import icon from '../images/icon.png'

import {
  Navbar,
} from '../components'

const ProfilePage: React.FC<{}> = () => {
  return (
    <>
      <Helmet>
        <title>プロフィール - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <div className='columns is-vcentered is-mobile'>
            <div className='column is-narrow'>
              <img src={icon} alt="Logo image" className='image is-96x96' />
            </div>
            <div className='column'>
              <h1 className='title is-2'>
                aoirint
              </h1>
              <p className='subtitle is-6 pt-1'>
                技術とさぶかる
              </p>
            </div>
          </div>
          <div className='columns is-multiline'>
            <div className='column is-6 my-2'>
              <h2 className='title is-5'>
                連絡先・SNS
              </h2>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>Twitter</th>
                    <td><a rel="me" href="https://twitter.com/aoirint">@aoirint</a></td>
                  </tr>
                  <tr>
                    <th>Mastodon</th>
                    <td><a rel="me" href="https://mstdn.aoirint.com/@aoirint">@aoirint@mstdn.aoirint.com</a></td>
                  </tr>
                  <tr>
                    <th>GitHub</th>
                    <td><a rel="me" href="https://github.com/aoirint">@aoirint</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='column is-6 my-2'>
              <h2 className='title is-5'>
                所属
              </h2>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>2021/12 -</th>
                    <td><a href="https://github.com/VOICEVOX">VOICEVOX</a> レビュワー</td>
                  </tr>
                  <tr>
                    <th>2021/04 -</th>
                    <td>電気通信大学 大学院 情報・ネットワーク工学専攻</td>
                  </tr>
                  <tr>
                    <th>2017/08 -</th>
                    <td>某 ソフトウェア開発系企業（アルバイト）</td>
                  </tr>
                  <tr>
                    <th>2017/04 - 2021/03</th>
                    <td>電気通信大学 研究開発系サークル インタラクティブメディアラボ</td>
                  </tr>
                  <tr>
                    <th>2017/04 - 2021/03</th>
                    <td>電気通信大学 情報理工学域</td>
                  </tr>
                  <tr>
                    <th>2014/04 - 2017/03</th>
                    <td>静岡県立富士高等学校</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                好きな技術・ツール
              </h2>
              <div className='content'>
                <ul>
                  <li>Docker</li>
                  <li>Ubuntu</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>Unity（ゲームエンジン）</li>
                  <li>Arduino</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                好きなキャラクター
              </h2>
              <div className='content pb-1'>
                <ul>
                  <li>ずんだもん（<a href="https://zunko.jp/">東北ずん子プロジェクト</a>）</li>
                  <li>鳴花ヒメ・ミコト（<a href="https://gynoid.co.jp/">ガイノイド</a>）</li>
                  <li>レイチェル・ガードナー（<a href="https://www.gamemaga.jp/satsuriku/">殺戮の天使</a>）</li>
                  <li>空閑 旭姫（<a href="https://www.tbs.co.jp/anime/subaru/">七星のスバル</a>）</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                好きなメディア作品
              </h2>
              <div className='content pb-1'>
                <ul>
                  <li><a href="https://mahoyome.jp/">魔法使いの嫁</a></li>
                  <li><a href="http://violet-evergarden.jp/">ヴァイオレット・エヴァーガーデン</a></li>
                  <li><a href="http://satsuriku.com/">殺戮の天使</a></li>
                  <li><a href="http://shin-godzilla.jp/">シン・ゴジラ</a>（2016年の映画）</li>
                  <li><a href="https://ncode.syosetu.com/n8719eb/">Guardian’s Sky ―女神の空―</a>（2018年の小説, <a href="https://mypage.syosetu.com/326669/">Sky Aviation</a> さん）</li>
                  <li><a href="https://kuboibuki.jp/">空母いぶき</a>（2019年の映画）</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                受賞歴
              </h2>
              <div className='content pb-1'>
                <ul>
                  <li>技育祭 ウインターハッカソンvol7 最優秀賞 「Spatial Volume Control App」（2021年2月）</li>
                  <li>電気通信大学 2019年度 学生表彰（課外活動）（2020年3月）</li>
                  <li>東京ゲームショウ2019 センス・オブ・ワンダーナイト BEST Technological Game Award 「UPLIGHT」（2019年9月）</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                論文・研究報告
              </h2>
              <div className='content pb-1'>
                <ul>
                  <li>（第二著者）“UPLIGHT: A Novel Portable Game Device with Omnidirectional Projection Display”, UIST 2021（2021年10月）</li>
                  <li>（第二著者）“UPLIGHT：小型全周囲ディスプレイを搭載した次世代の携帯型ゲームデバイスの開発”, 情報処理学会 第188回HCI研究会（2020年6月）</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                作品展示
              </h2>
              <h3 className='title is-6'>
                UPLIGHT
              </h3>
              <div className='content pb-1'>
                <ul>
                  <li>トリエ京王調布 こもれびテラス デモ展示（2020年12月） </li>
                  <li>京王あそびの森 HUGHUG デモ展示（2020年9月） </li>
                  <li>GDG DevFest Tokyo 2019 学生展示ブース デモ展示（2019年12月） </li>
                  <li>GUGEN2019 デモ展示（2019年12月）</li>
                  <li>東京ゲームショウ2019 インディーゲームコーナー選考ブース デモ展示（2019年9月）</li>
                </ul>
              </div>
            </div>
            <div className='column is-4 my-2'>
              <h2 className='title is-5'>
                OSSコントリビューション
              </h2>
              <h3 className='title is-6'>
                音声合成ソフトウェア VOICEVOX
              </h3>
              <h4 className='subtitle is-7'>
                <a href="https://github.com/VOICEVOX">
                  https://github.com/VOICEVOX
                </a>
              </h4>
              <div className='content pb-1'>
                <ul>
                  <li>自動ビルド（GitHub Actions）、Linux x64バイナリ対応、Docker対応、Linux armhfバイナリ対応ほか</li>
                </ul>
              </div>
              <h3 className='title is-6'>
                静的サイトジェネレータ miyadaiku
              </h3>
              <h4 className='subtitle is-7'>
                <a href="https://github.com/miyadaiku/miyadaiku">
                  https://github.com/miyadaiku/miyadaiku
                </a>
              </h4>
              <div className='content pb-1'>
                <ul>
                  <li>機能追加、バグ修正</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfilePage
