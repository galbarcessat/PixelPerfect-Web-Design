import LogoImg from '../assets/imgs/logo.svg'
import TwitterImg from '../assets/imgs/icon-twitter.svg'
import FacebookImg from '../assets/imgs/icon-facebook.svg'
import PinterestImg from '../assets/imgs/icon-pinterest.svg'

export function FooterSection() {

    return (
        <section className="footer-container main-layout">
            <section className="footer-inner-container">

                <div className='nav-and-contact-container'>
                    <div className='footer-nav-container' >
                        <img src={LogoImg} alt="" />
                        <div>
                            <span>home</span>
                            <span>about</span>
                        </div>
                    </div>

                    <div className='contact-info-container'>
                        <span>987  Hillcrest Lane</span>
                        <span>Irvine, CA</span>
                        <span>California 92714</span>
                        <span>Call Us : 949-833-743</span>
                    </div>
                </div>

                <div className='icons-container'>
                    <div>
                        <img className='social-icon' src={FacebookImg} alt="" />
                        <img className='social-icon' src={TwitterImg} alt="" />
                        <img className='social-icon' src={PinterestImg} alt="" />
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>

            </section>
        </section>
    )
}