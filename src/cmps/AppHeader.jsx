import LogoImg from '../assets/imgs/logo.svg'

export function AppHeader() {

    return (
        <section className="header-container main-layout">
            <div className="header-inner-container">
                <div>
                    <img src={LogoImg} alt="" />
                    <span>home</span>
                    <span>about</span>
                </div>
                <button className="btn-header">contact us</button>
            </div>

        </section>
    )
}

