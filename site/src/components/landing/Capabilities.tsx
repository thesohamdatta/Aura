import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Grid} from '@astryxdesign/core/Grid';
import {VStack} from '@astryxdesign/core/Layout';

const capabilities = [
  {
    label: 'Voice',
    headline: 'Sub-second thoughts.',
    body: 'Deepgram Nova-2 transcribes speech in real time. No typing. No tapping. Just speak.',
  },
  {
    label: 'Vision',
    headline: 'Aware of what you see.',
    body: "GPT-4o Vision reads your environment. Context from what's in front of you, not just what you say.",
  },
  {
    label: 'Memory',
    headline: 'Never forgets.',
    body: 'Pinecone vector database stores every interaction. Recall anything, anytime, without a second thought.',
  },
];

export function Capabilities() {
  return (
    <Section
      style={{
        padding: 'var(--spacing-20) var(--spacing-12)',
        background: 'var(--color-background-body)',
      }}
    >
      <VStack gap={10}>
        <VStack gap={3} style={{maxWidth: '560px'}}>
          <Text
            type="label"
            style={{color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase'}}
          >
            Capabilities
          </Text>
          <Heading level={2} type="display-2" style={{letterSpacing: '-0.02em'}}>
            Three senses. One pendant.
          </Heading>
        </VStack>

        <Grid columns={3} gap={8}>
          {capabilities.map((cap) => (
            <VStack key={cap.label} gap={4}>
              <Text
                type="label"
                style={{color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase'}}
              >
                {cap.label}
              </Text>
              <Heading level={3} style={{letterSpacing: '-0.01em', fontSize: '22px', fontWeight: 600}}>
                {cap.headline}
              </Heading>
              <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.6}}>
                {cap.body}
              </Text>
            </VStack>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
