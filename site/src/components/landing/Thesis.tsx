import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Layout';

export function Thesis() {
  return (
    <Section
      style={{
        padding: 'var(--spacing-24) var(--spacing-12)',
        background: '#0a0a0a',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <VStack gap={8} style={{maxWidth: '760px'}}>
        <Text
          type="label"
          style={{color: '#6e6e73', letterSpacing: '0.1em', textTransform: 'uppercase'}}
        >
          The Thesis
        </Text>

        <Heading
          level={2}
          type="display-2"
          style={{
            color: '#f5f5f7',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          The third device.
        </Heading>

        <Text
          style={{
            color: '#a1a1a6',
            fontSize: '20px',
            lineHeight: 1.65,
            maxWidth: '600px',
          }}
        >
          The laptop extended your mind. The phone connected it to the world.
          Aura makes it ambient: always present, never demanding attention.
          No screen to unlock. No app to open. It is just there.
        </Text>

        <Text
          style={{
            color: '#6e6e73',
            fontSize: '16px',
            lineHeight: 1.6,
            maxWidth: '540px',
            borderLeft: '2px solid #333',
            paddingLeft: 'var(--spacing-5)',
          }}
        >
          "Built on the frontiers of possible. For &lt;$50 in parts."
        </Text>
      </VStack>
    </Section>
  );
}
