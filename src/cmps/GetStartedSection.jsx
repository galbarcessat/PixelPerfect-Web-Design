
import GetStartedSectionCircle from '../assets/imgs/bg-pattern-home-6-about-5.svg'
export function GetStartedSection() {

    return (
        <section className="get-started-section main-layout">
            <section className="get-started-inner-container">
                <h1>Ready to get started?</h1>
                <button>contact us</button>
            </section>
            <img src={GetStartedSectionCircle} alt="" />
        </section>
    )
}