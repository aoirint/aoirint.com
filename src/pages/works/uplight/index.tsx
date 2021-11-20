import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
    Navbar,
} from '../../../components'

import UplightImage from '../images/uplight.jpg'

const Uplight: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>UPLIGHT</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        UPLIGHT
                    </h1>
                    <p className='subtitle'>
                        全周囲ディスプレイを搭載した携帯型ゲーム機
                    </p>
                    <div className='contents'>
                        <img
                            src={UplightImage}
                            alt="Uplight Photo"
                        />
                        <p>
                            研究開発系サークル<a href="https://imedia-lab.net/">インタラクティブメディアラボ</a>にて、
                            <a href="https://imedia-lab.net/iml-projects/uplight/">UPLIGHTプロジェクト</a>として製作。
                        </p>
                        <p>
                            Arduino, Unity, 3Dプリンタ, レーザ加工機などを使用した。
                        </p>
                        <p>
                            開発メンバーとして、電装やミドルウェアほかを担当した。
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uplight
