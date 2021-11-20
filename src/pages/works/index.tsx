import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
    Navbar,
} from '../../components'

import UplightPhoto from './images/uplight.jpg'
import HoloPickImage from './images/holopick.png'
import TabletopEduImage from './images/tabletop_edu.jpg'
import SpatialVolumeControllerImage from './images/spatial_volume_controller.jpg'

interface WorkCard {
    title: string
    image: any
    imageAlt: string
    url: string
    subtitle: string
    date: string
}

const cards: WorkCard[] = [
    {
        title: 'Spatial Volume Controller',
        image: SpatialVolumeControllerImage,
        imageAlt: 'Spatial Volume Controller Usage',
        url: 'spatial_volume_controller/',
        subtitle: '全周囲ディスプレイを搭載した携帯型ゲーム機',
        date: '2021-02 ~',
    },
    {
        title: 'Holo Pick',
        image: HoloPickImage,
        imageAlt: 'Holo Pick Usage',
        url: 'holopick/',
        subtitle: '領域分割とペッパーズゴーストによる写真投影システム',
        date: '2019 ~',
    },
    {
        title: 'テーブルトップディスプレイを活用したグループプログラミング学習ツール',
        image: TabletopEduImage,
        imageAlt: 'Workshop Photo',
        url: 'tabletop_edu/',
        subtitle: '',
        date: '2018 ~',
    },
    {
        title: 'UPLIGHT',
        image: UplightPhoto,
        imageAlt: 'UPLIGHT Photo',
        url: 'uplight/',
        subtitle: '全周囲ディスプレイを搭載した携帯型ゲーム機',
        date: '2019-01 ~',
    },
]

const Works: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>aoirint's Works</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Works
                    </h1>
                    <p className='subtitle'>
                        関わった作品
                    </p>
                    <div className='columns is-multiline'>
                        {cards.map((card) => (
                            <div className='column is-one-quarter'>
                                <a href={card.url}>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img src={card.image} alt={card.imageAlt} />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-4">{card.title}</p>
                                                    <p className="subtitle is-6">{card.subtitle}</p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    {card.date}
                                                </p>
                                            </div>
                                        </div>
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

export default Works
