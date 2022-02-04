import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
    Navbar,
} from '../../../components'

import HoloPickImage from '../images/holopick.png'

const HoloPick: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>Holo Pick</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Holo Pick
                    </h1>
                    <p className='subtitle'>
                        領域分割とペッパーズゴーストによる写真投影システム
                    </p>
                    <div className='contents'>
                        <img
                            src={HoloPickImage}
                            alt="Holo Pick Usage"
                        />
                        <p>
                            <a href="https://www.ce.uec.ac.jp/projects/">PBL講義 ICCD2019</a>にて、チームKとして製作。
                        </p>
                        <p>
                            PyTorch/TorchScript, Android スマートフォン, Jetson Nano, 3Dプリンタなどを使用した。
                        </p>
                        <p>
                            開発メンバーとして、深層学習、Jetson Nano組み込みアプリ、電装ほかを担当した。
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HoloPick
