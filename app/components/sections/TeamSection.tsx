import { Section, TeamMemberCard } from '../ui';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Raman Kumar',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating seamless mobile experiences.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Nicholas Tam',
      role: 'UI/UX Designer',
      bio: 'Designing intuitive and beautiful interfaces that users love.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Amar',
      role: 'Backend Engineer',
      bio: 'Building robust APIs and scalable backend systems.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Junior',
      role: 'Product Manager',
      bio: 'Bringing ideas to life and ensuring the best user experience.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
        {
      name: 'Matthew L',
      role: 'Backend Developer',
      bio: 'Designing scalable backend systems and APIs.',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <Section id="team" title="Meet the Team" className="bg-white">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our talented team of developers and designers working together to bring you the best movie discovery experience.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 italic">
          Want to join our team? We're always looking for talented individuals!
        </p>
      </div>
    </Section>
  );
}
