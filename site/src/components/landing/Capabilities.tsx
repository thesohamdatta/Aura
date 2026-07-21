import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';

const capabilities = [
  {
    label: '01',
    title: 'Voice',
    heading: 'Speak once. Aura keeps pace.',
    description: 'Deepgram Nova-2 transcribes speech in real time. Every conversation becomes searchable text within seconds.',
    detail: 'Sub-second capture',
  },
  {
    label: '02',
    title: 'Vision',
    heading: 'The camera adds context, not clutter.',
    description: 'GPT-4o Vision understands what you point at. Returns a description of the scene in under two seconds.',
    detail: 'GPT-4o Vision',
  },
  {
    label: '03',
    title: 'Memory',
    heading: 'Every exchange stays findable.',
    description: 'Pinecone indexes every conversation as a vector embedding. Search by context, not keywords.',
    detail: 'Vector recall',
  },
];

export function Capabilities() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
      <div className="page-shell">
        <VStack gap={8}>
          <div>
            <div className="section-label">Core capabilities</div>
            <Heading level={2} type="display-2">
              Three senses. One pendant.
            </Heading>
          </div>

          <Grid columns={3} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-5)'}}>
            {capabilities.map((cap) => (
              <Card key={cap.title} style={{padding: 'var(--spacing-6)'}}>
                <VStack gap={4}>
                  <div className="section-label" style={{fontSize: '1rem'}}>{cap.label}</div>
                  <Heading level={3} type="display-3">
                    {cap.heading}
                  </Heading>
                  <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                    {cap.description}
                  </Text>
                  <Text style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)', fontWeight: 500}}>
                    {cap.detail}
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
