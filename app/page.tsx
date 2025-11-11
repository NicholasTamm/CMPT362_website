import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {
  PitchSection,
  TeamSection,
  ApkSection,
  UiSection,
  VideoSection,
} from './components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <PitchSection />
        <TeamSection />
        <ApkSection />
        <UiSection />
        <VideoSection />
      </main>

      <Footer />
    </div>
  );
}
