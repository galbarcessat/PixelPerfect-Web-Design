import Rectangle from '../assets/imgs/Rectangle.png'
import CirclesImg from '../assets/imgs/bg-pattern-home-2.svg'

export function WelcomeSection() {
    return (
        <section className="welcome-section-container main-layout">
            <div className='welcome-section-inner-container'>
                <h1>Find the best <span>talent</span></h1>
                <div>
                    <img src={Rectangle} alt="" />
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
                </div>
                <img src={CirclesImg} alt="" />
            </div>
        </section>
    )

}