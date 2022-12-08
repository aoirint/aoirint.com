import React, { useEffect, useState } from 'react'

interface LiveinfoApiMiddlewareV1YtliveResponse {
  program: {
    id: string
    title: string
    description: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
    startTime: string
    endTime: string
    isOnair: boolean
  }
  channel: {
    name: string
    url: string
    thumbnails: Record<string, {
      url: string
      width: number
      height: number
    }>
  }
}

const LiveinfoApiMiddlewareYtliveCard: React.FC<{}> = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [response, setResponse] = React.useState<LiveinfoApiMiddlewareV1YtliveResponse | null>(null)

  useEffect(() => {
    if (response === null) {
      fetch('https://liveinfo-api-middleware.aoirint.com/v1/ytlive')
        .then((data) => data.json())
        .then((data: LiveinfoApiMiddlewareV1YtliveResponse) => {
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
  const channel = response?.channel

  return isOnair ? (
    <>
      <div
        className='card mb-6'
        style={
          isOnair && program?.thumbnails.standard.url != null ? {
            backgroundImage: `url(${program.thumbnails.standard.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'whitesmoke',
          } : {}
        }
      >
        <div
          className="card-content py-4"
          style={
            isOnair && program?.thumbnails.standard.url != null ? {
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
                    <a href={channel?.url ?? '#'} style={{ color: 'inherit' }}>
                      {channel?.name}
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
                <a href="https://www.youtube.com/channel/UC7OazbQ3Eo9vrkcReXGIZkQ">YouTube Data API</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : <></>
}

export default LiveinfoApiMiddlewareYtliveCard
