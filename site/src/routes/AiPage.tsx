import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Table, TableRow, TableCell, TableHeaderCell} from '@astryxdesign/core/Table';
import {SiteNav} from '../components/layout/TopNav';
import {Footer} from '../components/layout/Footer';

const layers = [
  {
    name: 'Perception',
    icon: 'microphone',
    title: 'Aware of what you hear and see.',
    body: 'Powered by Deepgram Nova-2 for real-time speech-to-text, and GPT-4o Vision for spatial context. Aura processes your conversations and visual world simultaneously.',
  },
  {
    name: 'Reasoning',
    icon: 'brain',
    title: 'Sub-second thoughts.',
    body: 'Built on Groq LPU hardware, running language models at the limit of physics. Sub-500ms end-to-end response time.',
    stat: '0.5s',
    statLabel: 'Inference speed',
  },
  {
    name: 'Memory',
    icon: 'database',
    title: 'Never forgets.',
    body: 'Uses Pinecone\'s serverless vector database to index conversation semantic embeddings, ensuring permanent contextual recall.',
  },
  {
    name: 'Agency',
    icon: 'code',
    title: 'Connected to your world.',
    body: 'FastAPI agentic endpoints powered by LangGraph. Aura connects to your calendar, checks your emails, manages tasks, or searches the web.',
  },
];

const providers = [
  {provider: 'Groq', useCase: 'Fast inference', speed: '<500ms', cost: 'Low', privacy: 'Cloud'},
  {provider: 'OpenAI', useCase: 'Quality + Vision', speed: '~1s', cost: 'Medium', privacy: 'Cloud'},
  {provider: 'Ollama', useCase: 'Local / Private', speed: 'Varies', cost: 'Free', privacy: 'On-device'},
];

const pipeline = [
  {step: '1', name: 'Capture', detail: 'ESP32-S3 streams audio over Wi-Fi'},
  {step: '2', name: 'Transcribe', detail: 'Deepgram Nova-2 converts speech to text'},
  {step: '3', name: 'Understand', detail: 'GPT-4o Vision analyzes images for context'},
  {step: '4', name: 'Reason', detail: 'Groq LPU runs Llama-3 for fast inference'},
  {step: '5', name: 'Store', detail: 'Pinecone indexes embeddings for retrieval'},
  {step: '6', name: 'Retrieve', detail: 'Redis cache + Pinecone top-k for context'},
  {step: '7', name: 'Respond', detail: 'LLM generates contextual response'},
];

export function AiPage() {
  return (
    <>
      <SiteNav />
      <main style={{flex: 1}}>
        {/* Hero */}
        <Section style={{padding: 'clamp(4rem, 8vw, 7rem) 0', background: '#0A0A0A', color: '#F5F5F5'}}>
          <div className="page-shell">
            <VStack gap={5}>
              <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)'}}>
                Intelligence
              </div>
              <Heading level={1} type="display-1" style={{color: '#F5F5F5'}}>
                A four-layer AI pipeline, purpose-built for ambient computing.
              </Heading>
              <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.7, maxWidth: '560px', fontSize: '1.0625rem'}}>
                Each component is selected for its best-in-class performance, integrated via a custom API mesh that minimizes overhead.
              </Text>
            </VStack>
          </div>
        </Section>

        {/* Architecture flow */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
          <div className="page-shell">
            <VStack gap={8}>
              <div>
                <div className="section-label">Unified Architecture</div>
                <Heading level={2} type="display-2">
                  A seamless orchestration of industry giants.
                </Heading>
              </div>

              <div style={{display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center'}}>
                {['Deepgram', 'Groq', 'GPT-4o', 'Pinecone'].map((name, i) => (
                  <HStack key={name} gap={3} style={{alignItems: 'center'}}>
                    <Card style={{padding: 'var(--spacing-4) var(--spacing-6)', textAlign: 'center'}}>
                      <div style={{fontWeight: 600, fontSize: '0.9375rem'}}>{name}</div>
                    </Card>
                    {i < 3 && (
                      <div style={{color: 'var(--color-text-disabled)', fontSize: '1.25rem'}}>→</div>
                    )}
                  </HStack>
                ))}
              </div>
            </VStack>
          </div>
        </Section>

        {/* Pipeline steps */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
          <div className="page-shell">
            <VStack gap={6}>
              <div>
                <div className="section-label">Pipeline</div>
                <Heading level={2} type="display-2">
                  Seven steps. Sub-second.
                </Heading>
              </div>

              <VStack gap={0}>
                {pipeline.map((step) => (
                  <HStack key={step.step} gap={5} style={{padding: 'var(--spacing-4) 0', borderBottom: '1px solid var(--color-border)', alignItems: 'flex-start'}}>
                    <div style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', minWidth: '20px', paddingTop: '2px'}}>{step.step}</div>
                    <VStack gap={1}>
                      <div style={{fontWeight: 600}}>{step.name}</div>
                      <div style={{fontSize: '0.9375rem', color: 'var(--color-text-secondary)'}}>{step.detail}</div>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </div>
        </Section>

        {/* Layer details */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
          <div className="page-shell">
            <VStack gap={8}>
              <div>
                <div className="section-label">Layers</div>
                <Heading level={2} type="display-2">
                  Four layers. Each best-in-class.
                </Heading>
              </div>

              <Grid columns={2} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-5)'}}>
                {layers.map((layer) => (
                  <Card key={layer.name} style={{padding: 'var(--spacing-6)'}}>
                    <VStack gap={4}>
                      <div className="section-label">{layer.name}</div>
                      <Heading level={3} type="display-3">
                        {layer.title}
                      </Heading>
                      <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
                        {layer.body}
                      </Text>
                      {layer.stat && (
                        <div style={{display: 'flex', alignItems: 'baseline', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-2)'}}>
                          <span style={{fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em'}}>{layer.stat}</span>
                          <span style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)'}}>{layer.statLabel}</span>
                        </div>
                      )}
                    </VStack>
                  </Card>
                ))}
              </Grid>
            </VStack>
          </div>
        </Section>

        {/* Provider comparison */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
          <div className="page-shell">
            <VStack gap={6}>
              <div>
                <div className="section-label">Provider comparison</div>
                <Heading level={2} type="display-2">
                  Choose the right model for your needs.
                </Heading>
              </div>

              <Table>
                <TableRow>
                  <TableHeaderCell>Provider</TableHeaderCell>
                  <TableHeaderCell>Use Case</TableHeaderCell>
                  <TableHeaderCell>Speed</TableHeaderCell>
                  <TableHeaderCell>Cost</TableHeaderCell>
                  <TableHeaderCell>Privacy</TableHeaderCell>
                </TableRow>
                {providers.map((p) => (
                  <TableRow key={p.provider}>
                    <TableCell style={{fontWeight: 600}}>{p.provider}</TableCell>
                    <TableCell>{p.useCase}</TableCell>
                    <TableCell style={{fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem'}}>{p.speed}</TableCell>
                    <TableCell>{p.cost}</TableCell>
                    <TableCell>{p.privacy}</TableCell>
                  </TableRow>
                ))}
              </Table>
            </VStack>
          </div>
        </Section>

        {/* Metrics */}
        <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
          <div className="page-shell">
            <Grid columns={4} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-5)'}}>
              {[
                {value: '0.5s', label: 'Response latency', detail: 'Voice-to-text response loop'},
                {value: '4', label: 'Pipeline layers', detail: 'Perception → Reason → Memory → Response'},
                {value: '~$50', label: 'Hardware cost', detail: 'Off-the-shelf components'},
                {value: '<200ms', label: 'Memory retrieval', detail: 'Pinecone + Redis cache'},
              ].map((metric) => (
                <Card key={metric.label} style={{padding: 'var(--spacing-6)', textAlign: 'center'}}>
                  <div style={{fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1}}>{metric.value}</div>
                  <div style={{fontSize: '0.9375rem', fontWeight: 600, marginTop: 'var(--spacing-2)'}}>{metric.label}</div>
                  <div style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)', marginTop: 'var(--spacing-1)'}}>{metric.detail}</div>
                </Card>
              ))}
            </Grid>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
