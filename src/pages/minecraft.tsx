import * as React from 'react'
import Helmet from 'react-helmet'
import '../styles/main.scss'

import icon from '../images/icon.png'

import {
  Navbar, useMinecraftBedrockServerStatusList, useMinecraftJavaServerStatusList,
} from '../components'
import dayjs from 'dayjs'

const MinecraftPage: React.FC<{}> = () => {
  const { loading: bedrockServerStatusListLoading, bedrockServerStatusList } = useMinecraftBedrockServerStatusList()
  const { loading: javaServerStatusListLoading, javaServerStatusList } = useMinecraftJavaServerStatusList()

  return (
    <>
      <Helmet>
        <title>Minecraft Servers - aoirint.com</title>
      </Helmet>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            Minecraftサーバーの稼働状況
          </h1>
          <div className='columns is-multiline'>
            <div className='column is-12 my-2'>
              <h2 className='title is-5'>
                統合版
              </h2>
              {bedrockServerStatusListLoading ? (
                <p>
                  読み込み中
                </p>
              ) : (
                <table className='table'>
                  <tbody>
                    <tr>
                      <th>サーバー名</th>
                      <th>アドレス</th>
                      <th>稼働状態</th>
                      <th>確認時刻</th>
                    </tr>
                    {bedrockServerStatusList.map((bedrockServerStatus) => (
                      <tr key={bedrockServerStatus.id}>
                        <td>{bedrockServerStatus.name}</td>
                        <td><code>{`${bedrockServerStatus.host}:${bedrockServerStatus.port}`}</code></td>
                        <td>{bedrockServerStatus.ok ?
                          <span className="tag is-success is-medium">稼働中</span>
                          : <span className="tag is-danger is-medium">停止中</span>}
                        </td>
                        <td>{dayjs(bedrockServerStatus.timestamp).format('YYYY-MM-DDTHH:mm:ssZ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className='column is-12 my-2'>
              <h2 className='title is-5'>
                Java版
              </h2>
              {javaServerStatusListLoading ? (
                <p>
                  読み込み中
                </p>
              ) : (
                <table className='table'>
                  <tbody>
                    <tr>
                      <th>サーバー名</th>
                      <th>アドレス</th>
                      <th>稼働状態</th>
                      <th>確認時刻</th>
                    </tr>
                    {javaServerStatusList.map((javaServerStatus) => (
                      <tr key={javaServerStatus.id}>
                        <td>{javaServerStatus.name}</td>
                        <td><code>{`${javaServerStatus.host}:${javaServerStatus.port}`}</code></td>
                        <td>{javaServerStatus.ok ?
                          <span className="tag is-success is-medium">稼働中</span>
                          : <span className="tag is-danger is-medium">停止中</span>}
                        </td>
                        <td>{dayjs(javaServerStatus.timestamp).format('YYYY-MM-DDTHH:mm:ssZ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MinecraftPage
