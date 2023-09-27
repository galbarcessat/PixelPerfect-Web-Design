import QuotesIcon from '../assets/imgs/icon-quotes.svg'
import AiyshaImg from '../assets/imgs/avatar-aiysha.jpg'
import ArthurImg from '../assets/imgs/avatar-arthur.jpg'
import KadyImg from '../assets/imgs/avatar-kady.jpg'

export function ReviewsSection() {
    return (
        <section className="reviews-sections-container main-layout">
            <section className="reviews-sections-inner-container">

                <h1 className="reviews-main-txt">Delivering real results for top companies. Some of our <span>success stories.</span></h1>

                <section className="reviews-cards-container" >

                    <div className="review-card">
                        <div>
                            <img className='quote-img' src={QuotesIcon} alt="" />
                            <p className='review-card-main-txt'> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        </div>
                        <div>
                            <h1>Kady Baker</h1>
                            <p className='person-role-txt'>Product Manager at Bookmark</p>
                        </div>
                        <img className='person-img' src={KadyImg} alt="" />
                    </div>

                    <div className="review-card">
                        <div>
                            <img className='quote-img' src={QuotesIcon} alt="" />
                            <p className='review-card-main-txt'> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        </div>
                        <div>
                            <h1>Aiysha Reese</h1>
                            <p className='person-role-txt'>Founder of Manage</p>
                        </div>
                        <img className='person-img' src={AiyshaImg} alt="" />
                    </div>

                    <div className="review-card">
                        <div>
                            <img className='quote-img' src={QuotesIcon} alt="" />
                            <p className='review-card-main-txt'> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        </div>
                        <div>
                            <h1>Arthur Clarke</h1>
                            <p className='person-role-txt'>Co-founder of MyPhysio</p>
                        </div>
                        <img className='person-img' src={ArthurImg} alt="" />
                    </div>


                </section>
            </section>

        </section>
    )
}