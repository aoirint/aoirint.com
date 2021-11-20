import React from 'react'
import Helmet from 'react-helmet'
import '../../../styles/main.scss'
import {
    Navbar,
} from '../../../components'

import SpatialVolumeControllerImage from '../images/spatial_volume_controller.jpg'

const SpatialVolumeController: React.FC<{}> = () => {
    return (
        <>
            <Helmet>
                <title>UPLIGHT</title>
            </Helmet>
            <Navbar />
            <section className='section'>
                <div className='container'>
                    <h1 className='title'>
                        Spatial Volume Controller
                    </h1>
                    <p className='subtitle'>
                        動画の音量を空間的なUIで調整するChrome拡張
                    </p>
                    <div className='contents'>
                        <img
                            src={SpatialVolumeControllerImage}
                            alt="Spatial Volume Controller Usage"
                        />
                        <p>
                            <a href="https://talent.supporterz.jp/events/28d759c2-50b4-456d-889b-1f08abf6c053/">サポーターズ ウインターハッカソン vol.7</a>にて、
                            チーム<a href="https://github.com/miniature-octo-guide">Minuature Octo Guide</a>として製作。
                        </p>
                        <p>
                            Node.js / TypeScriptを使って開発した。
                        </p>
                        <p>
                            同ハッカソンにて、<a href="https://twitter.com/nacopaguu/status/1365963599538135041">最優秀賞</a>を受賞した。
                        </p>
                        <p>
                            GitHub：<a href="https://github.com/miniature-octo-guide/spatial-volume-controller">https://github.com/miniature-octo-guide/spatial-volume-controller</a>
                        </p>
                        <p>
                            Chrome Web Store：<a href="https://chrome.google.com/webstore/detail/pnkkbnogmhohlilallaniclhcekdahmm">https://chrome.google.com/webstore/detail/pnkkbnogmhohlilallaniclhcekdahmm</a>
                        </p>
                        <p>
                            開発メンバーとして、CI整備やコードレビュー、マージ作業ほかを担当した。
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpatialVolumeController
