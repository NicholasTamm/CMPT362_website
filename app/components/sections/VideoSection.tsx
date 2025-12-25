import { Section, YouTubePlayerCycle } from '../ui';

export default function VideoSection() {
  // Define YouTube video IDs 
  const videos = [
    {
      videoId: 'uNirabmypYI',
      title: 'MovieFinder Project Show and Tell 1'
    },
    {
      videoId: '3eeddl-oUHw',
      title: 'MovieFinder Project Show and Tell 2'
    },
    {
      videoId: 'AXdMC9scPWs',
      title: 'Final Project Presentation'
    }
  ];

  return (
    <Section id="video" title="See It in Action" className="bg-[var(--background)]">
      {/* Introduction */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Watch our comprehensive demo to see MovieFinder in action. Discover a new way to find,
          track, and explore movies with our intuitive mobile app.
        </p>
      </div>

      {/* Video Player */}
      <YouTubePlayerCycle 
        videos={videos}
        autoCycle={false} 
        cycleInterval={10000} 
      />

      {/* Key Highlights */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">
          What You'll See in the Demo
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--component-background)] rounded-lg p-6 shadow-md border border-gray-800">
            <h4 className="font-semibold text-white mb-2">Search & Discovery</h4>
            <p className="text-gray-300 text-sm">
              A new intuitive and easy way to search for movies and discover new favorites
            </p>
          </div>
          <div className="bg-[var(--component-background)] rounded-lg p-6 shadow-md border border-gray-800">
            <h4 className="font-semibold text-white mb-2">List Management</h4>
            <p className="text-gray-300 text-sm">
              Create and organize your personal movie lists effortlessly
            </p>
          </div>
          <div className="bg-[var(--component-background)] rounded-lg p-6 shadow-md border border-gray-800">
            <h4 className="font-semibold text-white mb-2">Detailed Information</h4>
            <p className="text-gray-300 text-sm">
              Access comprehensive movie details, ratings, and trailers 
            </p>
          </div>
          <div className="bg-[var(--component-background)] rounded-lg p-6 shadow-md border border-gray-800">
            <h4 className="font-semibold text-white mb-2">For You Feature</h4>
            <p className="text-gray-300 text-sm">
              Customized movie suggestions based on your swipe history
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Ready to try MovieFinder yourself?
        </p>
        <a
          href="#apk"
          className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:transform hover:scale-105"
        >
          Download Now
        </a>
      </div>
    </Section>
  );
}
