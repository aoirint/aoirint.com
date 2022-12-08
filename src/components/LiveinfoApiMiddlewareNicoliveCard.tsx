import React, { useEffect, useState } from 'react'

interface LiveinfoApiMiddlewareV1NicoliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: string[]
    startTime: string
    endTime: string
    isOnair: boolean
  }
  community: {
    name: string
    url: string
    iconUrl: string
  }
  user: {
    name: string
    url: string
    iconUrl: string
  }
}

const LiveinfoApiMiddlewareNicoliveCard: React.FC<{}> = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [response, setResponse] = React.useState<LiveinfoApiMiddlewareV1NicoliveResponse | null>(null)

  useEffect(() => {
    if (response === null) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/nicolive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1NicoliveResponse) => {
          setLoading(false)
          setResponse(data)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [loading, response])

  const program = response?.program
  const isOnair = program?.isOnair
  const community = response?.community
  const user = response?.user

  return isOnair ? (
    <>
      <div
        className='card mb-6'
        style={
          isOnair && program?.thumbnails[0] != null ? {
            backgroundImage: `url(${program.thumbnails[0]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'whitesmoke',
          } : {}
        }
      >
        <div
          className="card-content py-4"
          style={
            isOnair && program?.thumbnails[0] != null ? {
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            } : {}
          }
        >
          <div className="media">
            <div className="media-content">
              {isOnair ? (
                <>
                  <p className="title is-5">
                    <a href={program?.url ?? '#'} style={{ color: 'inherit' }}>
                      {program?.title}
                    </a>
                  </p>
                  <p className="subtitle is-7 mb-2">
                    <a href={community?.url ?? '#'} style={{ color: 'inherit' }}>
                      {community?.name}
                    </a>
                    {' - '}
                    <a href={user?.url ?? '#'} style={{ color: 'inherit' }}>
                      {user?.name}
                    </a>
                  </p>
                </>
              ) : loading ? (
                <>
                  <p className="title is-5">読み込み中</p>
                  <p className="subtitle is-7 mb-2">-</p>
                </>
              ) : (
                <>
                  <p className="title is-5">放送中の番組はありません</p>
                  <p className="subtitle is-7 mb-2">-</p>
                </>
              )}
              <p className='is-size-7 has-text-right has-text-grey'>
                Powered by
                {' '}
                <a href="https://com.nicovideo.jp/community/co5633084">ニコニコ生放送</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : <></>
}

export default LiveinfoApiMiddlewareNicoliveCard
