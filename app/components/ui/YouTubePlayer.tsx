'use client';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Video Description */}
      {title && (
        <div className="mt-4 text-center text-sm text-gray-500">
          {title}
        </div>
      )}
    </div>
  );
}

