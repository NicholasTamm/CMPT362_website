import { Section, Button } from '../ui';

export default function ApkSection() {
  return (
    <Section id="apk" title="Download MovieFinder" className="bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-8">
            Get started with MovieFinder today! Download our Android app and begin your movie discovery journey.
          </p>
        </div>

        {/* Download Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Android Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                </svg>
              </div>
            </div>

            {/* Download Info */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                MovieFinder for Android
              </h3>
              <p className="text-gray-600 mb-6">
                Version 1.0 • Latest Release
              </p>
              <Button
                href="/assets/apk/app-debug.apk"
                variant="primary"
                download="moviefinder.apk"
                className="text-lg px-8 py-4"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download APK
              </Button>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Installation Instructions
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Enable Unknown Sources</h5>
              <p className="text-sm text-gray-600">
                Go to Settings → Security → Enable "Install unknown apps"
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Download & Install</h5>
              <p className="text-sm text-gray-600">
                Click the download button and open the APK file
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Launch & Enjoy</h5>
              <p className="text-sm text-gray-600">
                Open MovieFinder and start discovering movies!
              </p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Requires Android 8.0 or higher • Size: ~20MB</p>
        </div>
      </div>
    </Section>
  );
}
