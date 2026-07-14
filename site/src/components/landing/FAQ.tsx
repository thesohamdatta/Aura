import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {Text} from '@astryxdesign/core/Text';
import {HStack, VStack} from '@astryxdesign/core/Layout';

const faqs = [
  {
    question: 'What is Aura?',
    answer:
      'Aura is an open-source AI pendant built on the XIAO ESP32-S3 Sense. It transcribes speech, processes context with an LLM, and stores everything in a vector database, all without a screen.',
  },
  {
    question: 'How much does it cost to build?',
    answer:
      'The bill of materials is approximately $50 USD. Every component is off-the-shelf. No proprietary parts.',
  },
  {
    question: 'Do I need to code to build one?',
    answer:
      'No. The docs walk through hardware assembly, firmware flashing, and backend setup step by step. Basic soldering skills help.',
  },
  {
    question: 'What AI models does it use?',
    answer:
      'Deepgram Nova-2 for speech-to-text, Groq (Llama 3) for reasoning, GPT-4o Vision for image context, and Pinecone for semantic memory.',
  },
  {
    question: 'Is the data private?',
    answer:
      'Your data goes to third-party cloud APIs (Deepgram, OpenAI, Groq, Pinecone). You control your own API keys. Self-hosted alternatives are on the roadmap.',
  },
  {
    question: 'Can I contribute?',
    answer:
      'Yes. MIT licensed. Hardware, firmware, backend, and app are all on GitHub. Issues and PRs welcome.',
  },
];

export function FAQ() {
  return (
    <Section
      style={{
        padding: 'var(--spacing-20) var(--spacing-12)',
        background: 'var(--color-background-body)',
      }}
    >
      <HStack gap={10} align="start">
        <VStack gap={3} style={{flex: '0 0 280px'}}>
          <Text
            type="label"
            style={{color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase'}}
          >
            FAQ
          </Text>
          <Heading level={2} type="display-2" style={{letterSpacing: '-0.02em'}}>
            Questions.
          </Heading>
          <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.6}}>
            If yours isn't here, open an issue on GitHub.
          </Text>
        </VStack>

        <VStack gap={2} style={{flex: 1}}>
          {faqs.map((faq) => (
            <Collapsible
              key={faq.question}
              trigger={
                <Text weight="semibold" style={{fontSize: '16px'}}>
                  {faq.question}
                </Text>
              }
            >
              <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.65, paddingBottom: 'var(--spacing-4)'}}>
                {faq.answer}
              </Text>
            </Collapsible>
          ))}
        </VStack>
      </HStack>
    </Section>
  );
}
