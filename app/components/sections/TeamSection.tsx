'use client';

import { useState } from 'react';
import { Section, TeamMemberCard, TeamMemberModal } from '../ui';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Raman Kumar',
      role: 'Developer',
      bio: 'Early Prototyping\n TMDB API Integration \n Architecture and Design \n Youtube Player integration',
      contributions: `Kotlin Development:
                  -  Handled TMDB implementation and integration
-  Early prototyping
-  Jetpack Compose refactor
-  Room DB modelling and thread architecture
-  Recommendations algorithm
-  YouTube Player for trailer in Detailed Movie View
Video editing, Demo Showcasing:
-  Pitch 
-  Show and tell 1
Design and Architecture
`,
      github: 'https://github.com/Gherra',
      linkedin: ''
    },
    {
      name: 'Nicholas Tam',
      role: 'Developer',
      bio: 'App Presentation \n Video Editing \n Website Development \n Firebase Integration\n Bug Fixes ',
      contributions: `Kotlin development:
Bug Fixing and Testing:
-  UI fixes with movie cards, swipe tab, explore page
-  Fixed null assignment bug
Brainstormed technical features to implement:
-  Gemini NLP implementation
-  Playing trailers within the swipe tab
-  Firebase integration
-  Implemented Firebase integration
-  Search algorithm weighted rating for relevance
Diagrams:
-  Thread Diagram
-  MVVM Diagram
Website Development and Deployment
Video editing, Voice over, Presentation slides, Demo showcasing:
-  Show_and_tell_1
-  Show_and_tell_2
-  Final project 
`,
      github: 'https://github.com/NicholasTamm',
      linkedin: 'https://www.linkedin.com/in/nicholas-tam-82a9aa295/'
    },
    {
      name: 'Amardeep Sangha',
      role: 'Developer',
      bio: 'UI Mockup \n App Logo Design',
      contributions: `Kotlin Development
-  App loading intro
Figma design
Diagrams:
-  UI Diagram & Mockup
Presentation script:
-  Pitch
Misc:
-  App Logo
-  Organized meetings
`,
      github: 'https://github.com/Amar710',
      linkedin: 'https://www.linkedin.com/in/amardeep-sangha-15a5aa265/'
    },
    {
      name: 'Luisito Camacho',
      role: 'Developer',
      bio: 'UI mockup \n Bug Fixes',
      contributions: `Kotlin Development:
-  Refactor refresh to display a loading animation on all pages
Bug fixes:
-  Trending page to display trending instead of 'popular'
-  Removed bug where trending
Figma
-  Design and Mockup
Diagrams:
-  UI mockup
Voiceover, Recording, and Presentation slides:
-  Pitch
-  Show and tell 1
-  Show and tell 2
`,
      github: 'https://github.com/Junior-Ca',
      linkedin: 'https://www.linkedin.com/in/luisito-camacho-9228412b0/'
    },
    {
      name: 'Matthew Liu',
      role: 'Developer',
      bio: 'Infinite Video Scrolling \n Website Development \n Video Player \n NLP Searching Capabilities',
      contributions: `Kotlin Development:
-  Brainstorm, Design, Implementation:
-  Gemini NLP searching implementation
-  Trailer player for Swipe page 
-  Refactored UI on Swipe Page
Bug Fixes:
-  Fixed refresh on the 'For You' page
Diagrams:
-  MVVM Diagram
-  Thread Diagram
Website Development
-  Presentation slides, Recording and Voiceover:
-  Show and tell 1
-  Show and tell 2
-  Final project`,
      github: 'https://github.com/matthew8573',
      linkedin: 'https://www.linkedin.com/in/matthew-liu-86b059337/'
    }
  ];

  return (
    <Section id="team" title="Meet the Team" className="bg-white">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our talented team of developers working together to bring you the best movie discovery experience.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click a team member for project contributions
        </p>
      </div>
    </Section>
  );
}
