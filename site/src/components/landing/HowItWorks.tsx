import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';

const steps = [
  {
    number: '01',
    title: 'Transcribe',
    body: 'Deepgram turns speech into text in under 300ms. The ESP32-S3 captures audio continuously and streams it to the cloud over Wi-Fi.',
    detail: 'Deepgram Nova-2 · 300ms',
  },
  {
    number: '02',
    title: 'Reason',
    body: 'Groq runs the language model fast enough that the pendant feels like a companion. Sub-500ms end-to-end response time.',
    detail: 'Groq LPU · Llama-3',
  },
  {
    number: '03',
    title: 'Remember',
    body: 'Pinecone indexes the result semantically. Every conversation becomes a searchable memory, retrievable by context.',
    detail: 'Pinecone vector index',
  },
];

export function HowItWorks() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
      <div className="page-shell">
        <VStack gap={8}>
          <div>
            <div className="section-label">How it works</div>
            <Heading level={2} type="display-2">
              Hear. Think. Remember.
            </Heading>
            <Text className="section-note" style={{marginTop: 'var(--spacing-3)'}}>
              The pipeline is simple on purpose.
            </Text>
          </div>

          <Grid columns={3} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-5)'}}>
            {steps.map((step) => (
              <Card key={step.number} style={{padding: 'var(--spacing-6)'}}>
                <VStack gap={4}>
                  <div className="step-number">{step.number}</div>
                  <Heading level={3} type="display-3">
                    {step.title}
                  </Heading>
                  <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                    {step.body}
                  </Text>
                  <Text style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)', fontFamily: "'JetBrains Mono', monospace"}}>
                    {step.detail}
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
