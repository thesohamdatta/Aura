import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Avatar} from '@astryxdesign/core/Avatar';
import {SiteNav} from '../components/layout/TopNav';
import {Footer} from '../components/layout/Footer';

const timeline = [
  {date: 'June 2025', title: 'Designing the Device', body: 'Inspiration: Her (2013). Drew the first ever sketch of the Aura.'},
  {date: 'July 2025', title: 'Raspberry Pi Failure', body: 'We chose the wrong one.'},
  {date: 'Dec 2025', title: 'Omi & The Open Ecosystem', body: 'Discovered smartphones can compute faster. Explored open ecosystems for AI wearables.'},
  {date: 'Feb 2026', title: 'First Prototype', body: 'The original Aura prototype. Failed, tried, failed again.'},
  {date: 'March 2026', title: 'First Ever Recording', body: 'Success! Then got too excited and shorted the module. Cost: $20.'},
  {date: 'April 2026', title: 'The Final Hardware + Software', body: 'Memories, tasks, chats. It became my friend.'},
  {date: 'July 2026', title: 'OS1 Research', body: 'Connecting humans and AI. Exploring what AI OS can bring to humanity with Edge AI.'},
];

const values = [
  {
    title: 'Open Hardware. Built for all.',
    body: 'Complete schematic transparency for a community-driven future. Inspect, modify, and build with total freedom.',
  },
  {
    title: 'Privacy. That\'s Aura.',
    body: 'Local processing ensures your voice and contextual data never leave your physical orbit. Zero cloud tracking.',
  },
  {
    title: 'No Subscriptions. Ever.',
    body: 'Owned entirely by you. No recurring fees, no data harvesting gates, no software locks. Free forever.',
  },
];

const team = [
  {
    name: 'Soham Karande',
    role: 'Lead and head researcher',
    motivation: 'for the love of personal intelligence',
    image: '/assets/team/soham (1).jpeg',
  },
  {
    name: 'Laxman Deshpande',
    role: 'Design and hardware',
    motivation: 'for the love of experience',
    image: '/assets/team/laxman.jpeg',
  },
];

const acknowledgements = [
  {name: 'Omi AI', role: 'Open ecosystem'},
  {name: 'ESP32-S3', role: 'Microcontroller'},
  {name: 'Pinecone', role: 'Vector database'},
  {name: 'Deepgram', role: 'Speech-to-text'},
];

export function AboutPage() {
  return (
    <>
      <SiteNav />
      <main style={{flex: 1}}>
        {/* Hero */}
        <Section style={{padding: 'clamp(4rem, 8vw, 7rem) 0'}}>
          <div className="page-shell">
            <VStack gap={5} style={{maxWidth: '640px'}}>
              <div className="section-label">About</div>
              <Heading level={1} type="display-1">
                The journey of Aura began in a shared dorm room.
              </Heading>
              <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '1.0625rem'}}>
                Driven by the belief that intelligence should be personal, private, and accessible to all.
              </Text>
            </VStack>
          </div>
        </Section>

        {/* Mission */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
          <div className="page-shell">
            <VStack gap={6} style={{maxWidth: '640px'}}>
              <div>
                <div className="section-label">Mission</div>
                <Heading level={2} type="display-2">
                  To create less socially disruptive technology.
                </Heading>
              </div>
              <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                To change the behaviors engineered by social media giants over the years, and to change how we live and use the internet.
              </Text>
            </VStack>
          </div>
        </Section>

        {/* Timeline */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
          <div className="page-shell">
            <VStack gap={8}>
              <div>
                <div className="section-label">Timeline</div>
                <Heading level={2} type="display-2">
                  From first sketch to CHI paper.
                </Heading>
              </div>

              <VStack gap={0}>
                {timeline.map((event, i) => (
                  <HStack key={i} gap={6} style={{padding: 'var(--spacing-5) 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'flex-start'}}>
                    <div style={{minWidth: '100px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)', paddingTop: '2px'}}>
                      {event.date}
                    </div>
                    <VStack gap={1}>
                      <div style={{fontWeight: 600}}>{event.title}</div>
                      <div style={{fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6}}>{event.body}</div>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </div>
        </Section>

        {/* Values */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
          <div className="page-shell">
            <VStack gap={8}>
              <div>
                <div className="section-label">Values</div>
                <Heading level={2} type="display-2">
                  Three principles. Non-negotiable.
                </Heading>
              </div>

              <Grid columns={3} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-5)'}}>
                {values.map((value) => (
                  <Card key={value.title} style={{padding: 'var(--spacing-6)'}}>
                    <VStack gap={3}>
                      <Heading level={3} type="display-3">
                        {value.title}
                      </Heading>
                      <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                        {value.body}
                      </Text>
                    </VStack>
                  </Card>
                ))}
              </Grid>
            </VStack>
          </div>
        </Section>

        {/* Team */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
          <div className="page-shell">
            <VStack gap={8}>
              <div>
                <div className="section-label">Team</div>
                <Heading level={2} type="display-2">
                  The people behind Aura.
                </Heading>
                <Text className="section-note" style={{marginTop: 'var(--spacing-3)'}}>
                  A collaborative effort between Computer, Human and Artificial Intelligence researchers.
                </Text>
              </div>

              <Grid columns={2} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-5)'}}>
                {team.map((member) => (
                  <Card key={member.name} style={{padding: 'var(--spacing-6)'}}>
                    <VStack gap={4}>
                      <Avatar name={member.name} src={member.image} size="large" />
                      <div>
                        <Heading level={3} type="display-3">{member.name}</Heading>
                        <div style={{fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-1)'}}>
                          {member.role}
                        </div>
                        <div style={{fontSize: '0.875rem', color: 'var(--color-accent)', fontStyle: 'italic', marginTop: 'var(--spacing-1)'}}>
                          {member.motivation}
                        </div>
                      </div>
                    </VStack>
                  </Card>
                ))}
              </Grid>
            </VStack>
          </div>
        </Section>

        {/* Acknowledgements */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
          <div className="page-shell">
            <VStack gap={6}>
              <div>
                <div className="section-label">Acknowledgements</div>
                <Heading level={2} type="display-2">
                  Built on the shoulders of open source.
                </Heading>
              </div>

              <Grid columns={4} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)'}}>
                {acknowledgements.map((item) => (
                  <Card key={item.name} style={{padding: 'var(--spacing-5)', textAlign: 'center'}}>
                    <div style={{fontWeight: 600}}>{item.name}</div>
                    <div style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)', marginTop: 'var(--spacing-1)'}}>{item.role}</div>
                  </Card>
                ))}
              </Grid>
            </VStack>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
