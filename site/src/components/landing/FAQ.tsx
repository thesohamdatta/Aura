import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {VStack} from '@astryxdesign/core/VStack';

const faqs = [
  {
    question: 'What does Aura actually capture?',
    answer: 'Aura captures conversations and visual context continuously. Audio is transcribed on-device using the ESP32-S3\'s processing capabilities. No raw audio is ever uploaded or stored — only text transcriptions and semantic embeddings reach the cloud.',
  },
  {
    question: 'Is my data private?',
    answer: 'Audio is transcribed on the XIAO ESP32-S3. Only anonymised semantic embeddings sync to the cloud. Your raw conversations stay on your device. You can also self-host the entire backend using Whisper and Ollama for complete local processing.',
  },
  {
    question: 'How fast does it respond?',
    answer: 'Context retrieval takes under 200ms. Queries run through a RAG pipeline with Pinecone vector search and Redis caching. End-to-end voice-to-response latency is under 500ms with Groq inference.',
  },
  {
    question: 'Can I build one myself?',
    answer: 'Yes. The hardware costs around $50 to source from Seeed Studio or Amazon. Firmware runs on FreeRTOS. The full build guide is in the docs and no soldering experience is needed for the base build.',
  },
  {
    question: 'What phone does it work with?',
    answer: 'Aura pairs with the companion app on iOS and Android over BLE. The app shows your memory timeline, lets you run voice queries, and syncs device settings.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'The battery lasts up to 4 hours of active listening on a single charge. It charges over USB-C in under 45 minutes and enters low-power standby when not in use.',
  },
];

export function FAQ() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
      <div className="page-shell">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-8)', alignItems: 'flex-start'}}>
          <div>
            <div className="section-label">FAQ</div>
            <Heading level={2} type="display-2">
              Questions.
            </Heading>
            <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7, marginTop: 'var(--spacing-3)'}}>
              If yours is not here, open an issue on GitHub.
            </Text>
          </div>

          <VStack gap={0} style={{width: '100%'}}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" style={{padding: 'var(--spacing-4) 0'}}>
                <Collapsible
                  trigger={<span style={{fontWeight: 500, cursor: 'pointer'}}>{faq.question}</span>}
                >
                  <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7, paddingTop: 'var(--spacing-2)'}}>
                    {faq.answer}
                  </Text>
                </Collapsible>
              </div>
            ))}
          </VStack>
        </div>
      </div>
    </Section>
  );
}
