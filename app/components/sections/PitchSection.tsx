import { Section, Button } from '../ui';

export default function PitchSection() {
  const features = [
    {
      icon: '🎬',
      title: 'Discover Movies',
      description: 'Browse through thousands of movies with our intuitive search and filtering system.'
    },
    {
      icon: '⭐',
      title: 'Track Your Favorites',
      description: 'Create personalized lists and keep track of movies you want to watch or have already seen.'
    },
    {
      icon: '🎯',
      title: 'Smart Recommendations',
      description: 'Get personalized movie recommendations based on your viewing history and preferences.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Designed for mobile devices with a clean, intuitive interface that works seamlessly.'
    }
  ];

  return (
    <Section id="pitch" title="" className="bg-gradient-to-b from-blue-50 to-white pt-32">
      {/* Hero Area */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">MovieFinder</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Your ultimate companion for discovering and tracking movies
        </p>
        <p className="text-lg text-gray-600 mb-10">
          MovieFinder is a mobile app designed to enhance your movie-watching experience.
          Whether you're looking for your next favorite film or organizing your watchlist,
          we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#apk" variant="primary">
            Download Now
          </Button>
          <Button href="#video" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose MovieFinder?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
