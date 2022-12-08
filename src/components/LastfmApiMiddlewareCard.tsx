import React, { useEffect, useState } from 'react'

interface LastFmApiMiddlewareV1RecentTracksResponse {
  recenttracks: {
    track: {
      artist: {
        '#text': string
      }
      image: {
        size: string
        '#text': string
      }[]
      album: {
        '#text': string
      },
      name: string,
      '@attr'?: {
        nowplaying: 'true' | string
      },
      url: string
      date?: {
        uts: string
        '#text': string
      }
    }[]
  }
}

const LastfmApiMiddlewareCard: React.FC<{}> = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [response, setResponse] = React.useState<LastFmApiMiddlewareV1RecentTracksResponse>(null)

  useEffect(() => {
    if (response === null) {
      fetch('https://lastfm-api-middleware.aoirint.com/v1/recenttracks')
        .then((data) => data.json())
        .then((data: LastFmApiMiddlewareV1RecentTracksResponse) => {
          setLoading(false)
          setResponse(data)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [loading, response])

  const lastTrack = response?.recenttracks.track.length > 0 ? response.recenttracks.track[0] : null
  const isPlaying = lastTrack?.['@attr']?.nowplaying === 'true'

  const lastTrackUrl = lastTrack?.url
  const lastTrackTitle = lastTrack?.name
  const lastTrackAlbumName = lastTrack?.album['#text']
  const lastTrackArtist = lastTrack?.artist['#text']
  const lastTrackAlbumArt = lastTrack?.image.filter((image) => image.size === 'medium')[0]

  return (
    <>
      <div className='card mb-6'>
        <div className="card-content py-4">
          <div className="media">
            <div className="media-left">
              {isPlaying ? (
                <a href={lastTrackUrl ?? '#'}>
                  <figure className="image is-64x64">
                    <img src={lastTrackAlbumArt != null ? lastTrackAlbumArt?.['#text'] : '#'} alt="Album art" />
                  </figure>
                </a>
              ) : loading ? (
                <figure className="image is-64x64 has-background-light">
                </figure>
              ) : (
                <figure className="image is-64x64 has-background-light">
                </figure>
              )}
            </div>
            <div className="media-content">
              {isPlaying ? (
                <>
                  <p className="title is-5">
                    {'♪ '}
                    <a href={lastTrackUrl ?? '#'} style={{ color: 'inherit' }}>
                      {lastTrackTitle}
                    </a>
                  </p>
                  <p className="subtitle is-7 mb-2">
                    <a href={lastTrackUrl ?? '#'} style={{ color: 'inherit' }}>
                      {lastTrackAlbumName} - {lastTrackArtist}
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
                  <p className="title is-5">再生中の音楽はありません</p>
                  <p className="subtitle is-7 mb-2">-</p>
                </>
              )}
              <p className='is-size-7 has-text-right has-text-grey'>
                Powered by
                {' '}
                <a href="https://www.last.fm/user/aoirint">AudioScrobbler / Last.fm API</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastfmApiMiddlewareCard
