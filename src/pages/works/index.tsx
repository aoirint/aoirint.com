import React from 'react'
import Helmet from 'react-helmet'
import '../../styles/main.scss'
import {
    Navbar,
} from '../../components'

import UplightPhoto from './images/uplight.jpg'
import SpatialVolumeControllerImage from './images/spatial_volume_controller.jpg'

interface WorkCard {
    title: string
    image: any
    url: string
    subtitle: string
    date: string
}

const cards: WorkCard[] = [
    {
        title: 'Spatial Volume Controller',
        image: SpatialVolumeControllerImage,
        url: 'spatial_volume_controller/',
        subtitle: '全周囲ディスプレイを搭載した携帯型ゲーム機',
        date: '2021-02 ~',
    },
    {
        title: 'UPLIGHT',
        image: UplightPhoto,
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
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={card.image} alt="UPLIGHT photo" />
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works
