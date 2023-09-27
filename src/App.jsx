import { AppHeader } from "./cmps/AppHeader";
import { FooterSection } from "./cmps/FooterSection";
import { GetStartedSection } from "./cmps/GetStartedSection";
import { InfoSection } from "./cmps/InfoSection";
import { ReviewsSection } from "./cmps/ReviewsSection";
import { WelcomeSection } from "./cmps/WelcomeSection";

export function App() {

  return (
    <section className="main-layout">
      <AppHeader />
      <WelcomeSection />
      <InfoSection />
      <ReviewsSection />
      <GetStartedSection />
      <FooterSection />
    </section>
  )
}

