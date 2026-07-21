import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Avatar} from '@astryxdesign/core/Avatar';

const team = [
  {
    name: 'Soham Karande',
    role: 'Hardware · AI pipeline · Research',
    bio: 'Designed the pendant hardware, the 4-layer AI pipeline, and led the CHI paper.',
    image: '/assets/team/soham (1).jpeg',
  },
  {
    name: 'Laxman Deshpande',
    role: 'Firmware · Backend · App',
    bio: 'Built the firmware, backend, and mobile experience that keeps the system reliable.',
    image: '/assets/team/laxman.jpeg',
  },
];

export function Team() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
      <div className="page-shell">
        <VStack gap={8}>
          <div>
            <div className="section-label">Team</div>
            <Heading level={2} type="display-2">
              Made in Pune.
            </Heading>
            <Text className="section-note" style={{marginTop: 'var(--spacing-3)'}}>
              Two people building ambient intelligence in Pune, India.
            </Text>
          </div>

          <Grid columns={2} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-5)'}}>
            {team.map((member) => (
              <Card key={member.name} style={{padding: 'var(--spacing-6)'}}>
                <VStack gap={4}>
                  <Avatar
                    name={member.name}
                    src={member.image}
                    size="large"
                  />
                  <div>
                    <Heading level={3} type="display-3">
                      {member.name}
                    </Heading>
                    <div style={{fontSize: '0.8125rem', color: 'var(--color-accent)', fontWeight: 500, marginTop: 'var(--spacing-1)'}}>
                      {member.role}
                    </div>
                  </div>
                  <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                    {member.bio}
                  </Text>
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>
      </div>
    </Section>
  );
}
