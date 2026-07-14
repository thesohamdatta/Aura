import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack, VStack} from '@astryxdesign/core/Layout';

export function Hero() {
  return (
    <Section
      style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '128px 80px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0a0a0a 0%, #000000 60%)',
          zIndex: 0,
        }}
      />

      <VStack gap={6} style={{position: 'relative', zIndex: 1, maxWidth: '820px'}}>
        <Text
          type="label"
          style={{color: '#6e6e73', letterSpacing: '0.1em', textTransform: 'uppercase'}}
        >
          Aura: Open Source AI Pendant
        </Text>

        <Heading
          level={1}
          type="display-3"
          style={{
            color: '#f5f5f7',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Worn.<br />
          Screenless.<br />
          Aware.
        </Heading>

        <Text
          style={{
            color: '#a1a1a6',
            fontSize: '20px',
            maxWidth: '480px',
            lineHeight: 1.5,
          }}
        >
          An AI companion you wear. It listens, sees, and remembers, without a screen or a wake word.
        </Text>

        <HStack gap={3} style={{marginTop: '8px'}}>
          <a
            href="/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: '#f5f5f7',
              color: '#0a0a0a',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            Build Yours
          </a>
          <a
            href="https://github.com/thesohamdatta/aura"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'transparent',
              color: '#a1a1a6',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
              border: '1px solid #333',
            }}
          >
            View on GitHub
          </a>
        </HStack>
      </VStack>
    </Section>
  );
}
