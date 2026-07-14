import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack, VStack} from '@astryxdesign/core/Layout';

export function Research() {
  return (
    <Section
      style={{
        padding: 'var(--spacing-20) var(--spacing-12)',
        background: 'var(--color-background-body)',
      }}
    >
      <HStack gap={10} align="center">
        <VStack gap={4} style={{flex: 1}}>
          <Text
            type="label"
            style={{color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase'}}
          >
            Research
          </Text>
          <Heading level={2} type="display-2" style={{letterSpacing: '-0.02em'}}>
            Peer-reviewed.<br />Published at CHI.
          </Heading>
          <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '400px'}}>
            Aura was accepted at ACM CHI 2026, the premier venue for
            human-computer interaction research. Rigorous study. Real results.
          </Text>
          <HStack gap={3}>
            <a
              href="https://zenodo.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                background: 'var(--color-accent)',
                color: '#ffffff',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              Read the Paper
            </a>
            <a
              href="https://dl.acm.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                background: 'transparent',
                color: 'var(--color-text-secondary)',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid var(--color-border-emphasized)',
              }}
            >
              ACM Digital Library
            </a>
          </HStack>
        </VStack>

        <VStack
          gap={4}
          style={{
            flex: 1,
            background: 'var(--color-background-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '18px',
            padding: '40px',
          }}
        >
          <Text
            type="label"
            style={{color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase'}}
          >
            CHI '26 · Late-Breaking Work
          </Text>
          <Heading level={3} style={{fontSize: '20px', fontWeight: 600, lineHeight: 1.3}}>
            Aura: An Open-Source, Screenless Wearable AI Companion for Ambient Assistance
          </Heading>
          <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.6}}>
            We present Aura, a $50 open-source AI pendant that delivers
            voice-first ambient intelligence without a screen. We evaluate
            latency, recall accuracy, and user perception across 4 weeks of
            daily use.
          </Text>
          <Text
            type="label"
            style={{color: 'var(--color-text-disabled)', marginTop: '8px'}}
          >
            Karande et al. · 2026 · Zenodo DOI: 10.5281/zenodo.10684321
          </Text>
        </VStack>
      </HStack>
    </Section>
  );
}
