import { Section, TeamMemberCard } from '../ui';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Raman Kumar',
      role: 'Developer',
      bio: 'Kotlin Development \n Database Design \n Architecture',
      github: 'https://github.com/Gherra',
      linkedin: ''
    },
    {
      name: 'Nicholas Tam',
      role: 'Developer',
      bio: 'Video Editing \n Website \n MVVM design \n Database Integration ',
      github: 'https://github.com/NicholasTamm',
      linkedin: 'https://www.linkedin.com/in/nicholas-tam-82a9aa295/'
    },
    {
      name: 'Amardeep Sangha',
      role: 'Developer',
      bio: 'UI Mockup \n Kotlin Development \n App Logo Design' ,
      github: 'https://github.com/Amar710',
      linkedin: 'https://www.linkedin.com/in/amardeep-sangha-15a5aa265/'
    },
    {
      name: 'Luisito Camacho',
      role: 'Developer',
      bio: 'UI mockup \n Kotlin Development \n Bug Fixes',
      github: 'https://github.com/Junior-Ca',
      linkedin: 'https://www.linkedin.com/in/luisito-camacho-9228412b0/'
    },
        {
      name: 'Matthew L',
      role: 'Developer',
      bio: 'Backend \n Website \n MVVM design \n Natural Language Processing',
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
            />
          );
        })}
      </div>


    </Section>
  );
}
