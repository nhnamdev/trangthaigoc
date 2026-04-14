import Header from "../../components/Header/Header.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import SponsorStrip from "../../components/SponsorStrip/SponsorStrip.jsx";
import PodcastSection from "../../components/PodcastSection/PodcastSection.jsx";
import BooksSection from "../../components/BooksSection/BooksSection.jsx";
import MembershipSection from "../../components/MembershipSection/MembershipSection.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ChatbotWidget from "../../components/ChatbotWidget/ChatbotWidget.jsx";
import {
  bookFeatures,
  footerMenus,
  heroContent,
  memberBenefits,
  navLinks,
  podcastEpisodes,
  podcastPlatforms,
  pressLogos,
  primaryResource,
  blindSpotCard,
} from "../../data/homePageData.js";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Bỏ qua đến nội dung
      </a>

      <Header navLinks={navLinks} />

      <main id="main" className="home-page">
        <HeroSection heroContent={heroContent} pressLogos={pressLogos} />
        <SponsorStrip primaryResource={primaryResource} />
        <PodcastSection
          blindSpotCard={blindSpotCard}
          podcastEpisodes={podcastEpisodes}
          podcastPlatforms={podcastPlatforms}
        />
        <BooksSection bookFeatures={bookFeatures} />
        <MembershipSection memberBenefits={memberBenefits} />
      </main>

      <Footer footerMenus={footerMenus} />
      <ChatbotWidget />
    </>
  );
}

export default HomePage;
