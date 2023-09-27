import InfoSectionCircleImg from '../assets/imgs/bg-pattern-home-3.svg'
import RectanglePink from '../assets/imgs/RectanglePink.png'
import PersonIcon from '../assets/imgs/icon-person.svg'
import ChartIcon from '../assets/imgs/icon-chart.svg'
import CogIcon from '../assets/imgs/icon-cog.svg'

export function InfoSection() {

    return (
        <section className="info-section-container main-layout">
            <section className='info-section-inner-container'>

                <div className='main-txt-container'>
                    <img src={RectanglePink} alt="" />
                    <p>Build & manage distributed teams like no one else.</p>
                </div>

                <section className='cards-container'>
                    <div className='card-container'>
                        <img src={PersonIcon} alt="" />
                        <div>
                            <h1>Experienced Individuals</h1>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>

                    <div className='card-container'>
                        <img src={ChartIcon} alt="" />
                        <div>
                            <h1>Easy to Implement</h1>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>

                    <div className='card-container'>
                        <img src={CogIcon} alt="" />
                        <div>
                            <h1>Enhanced Productivity</h1>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </section>

            </section>
            <img className='InfoSectionCircleImg' src={InfoSectionCircleImg} alt="" />
        </section>
    )
}
