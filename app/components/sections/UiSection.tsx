import { Section, ImageGallery } from '../ui';

export default function UiSection() {
  const screenshots = [
    {
      src: '/assets/screenshots/MovieFinderImage1.jpg',
      alt: 'MovieFinder Home Screen',
      title: 'Home Screen'
    },
    {
      src: '/assets/screenshots/MovieFinderExplorePage.jpg',
      alt: 'MovieFinder Explore Page',
      title: 'Explore Movies'
    },
    {
      src: '/assets/screenshots/MovieFinderShuffle.jpg',
      alt: 'MovieFinder Shuffle Feature',
      title: 'Shuffle & Discover'
    }
  ];

  return (
    <Section
      id="ui"
      title="App Interface"
      className="bg-white py-12 md:py-16"
      fullHeight={false}
    >
      {/* Introduction */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore MovieFinder's intuitive and beautiful interface. Navigate through our sleek design
          and discover how easy it is to find your next favorite movie.
        </p>
      </div>

      {/* Gallery */}
      <ImageGallery images={screenshots} />

      {/* Features Highlight */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Clean Design</h4>
          <p className="text-gray-600">
            Modern, intuitive interface that's easy to navigate
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Fast Performance</h4>
          <p className="text-gray-600">
            Smooth animations and quick loading times
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Beautiful Visuals</h4>
          <p className="text-gray-600">
            High-quality images and engaging movie details
          </p>
        </div>
      </div>
    </Section>
  );
}
