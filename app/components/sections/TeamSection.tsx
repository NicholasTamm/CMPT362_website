'use client';

import { useState } from 'react';
import { Section, TeamMemberCard, TeamMemberModal } from '../ui';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Raman Kumar',
      role: 'Developer',
      bio: 'Early Prototyping\n TMDB API Integration \n Architecture and Design \n Youtube Player integration \n App Presentation \n Video Editing',
      contributions: `Kotlin Development:
                  -  Handled TMDB implementation and integration
-  Room Database modelling and integration
-  YouTubePlayerView implementation and integration
-  Legacy UI and UI prototyping
Design and Architecture:
-  Early Prototyping
-  Implemented Early MVVM Diagram
-  Designed the Database Schema
`,
      github: 'https://github.com/Gherra',
      linkedin: ''
    },
    {
      name: 'Nicholas Tam',
      role: 'Developer',
      bio: 'Architecture and Design\n UI Redesign \nFirebase Integration\n Bug Fixes\n Website Development\n App Presentation \n Video Editing',
      contributions: `Kotlin Development:
-  Architecture and Design for NLP integration, Firebase integration, and Infinite Video Scrolling
-  Implemented Firebase integration
-  Implemented weighted rating algorithim providing more relevant search results
-  UI fixes with movie cards, swipe tab, explore page, null assignment bug
Architecture and Design:
-  Thread Diagram
-  MVVM Diagram
Website Development and Deployment
`,
      github: 'https://github.com/NicholasTamm',
      linkedin: 'https://www.linkedin.com/in/nicholas-tam-82a9aa295/'
    },
    {
      name: 'Matthew Liu',
      role: 'Developer',
      bio: 'Infinite Video Scrolling \n Website Development \n Video Player \n NLP Searching Capabilities',
      contributions: `Kotlin Development:
-  Brainstorm, Design, Implementation:
-  Integrated Gemini to enable users to search movies using natural language
-  Designed workflow to parse keywords to optimially search TMDb while limiting the total requests produced
-  Hypertuned Paramters to optimize search results from Gemini
-  Developed custom player using YoutubePlayer to replicate Infinite Media Feed
-  Refactored UI on Swipe Page
Bug Fixes:
-  Fixed refresh on the 'For You' page
Architecture and Design:
-  MVVM Diagram
-  Thread Diagram`,
      github: 'https://github.com/matthew8573',
      linkedin: 'https://www.linkedin.com/in/matthew-liu-86b059337/'
    }
  ];

  return (
    <Section id="team" title="Meet the Team" className="bg-[var(--background)]">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our talented team of developers working together to bring you the best movie discovery experience.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => {
          const github = member.github?.trim();
          const linkedin = member.linkedin?.trim();

          return (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              github={github || undefined}
              linkedin={linkedin || undefined}
              onClick={() => setSelectedMember(index)}
            />
          );
        })}
      </div>

      {/* Team Member Modal */}
      {selectedMember !== null && (
        <TeamMemberModal
          isOpen={true}
          onClose={() => setSelectedMember(null)}
          name={teamMembers[selectedMember].name}
          role={teamMembers[selectedMember].role}
          bio={teamMembers[selectedMember].bio}
          contributions={teamMembers[selectedMember].contributions}
          github={teamMembers[selectedMember].github?.trim() || undefined}
          linkedin={teamMembers[selectedMember].linkedin?.trim() || undefined}
        />
      )}

      {/* Additional Information text */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Click a team member for project contributions
        </p>
      </div>
    </Section>
  );
}
