import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Link} from 'react-router-dom';

export function Hero() {
  return (
    <Section
      style={{
        padding: 'clamp(3rem, 6vw, 6rem) 0',
        textAlign: 'center',
      }}
    >
      <div className="page-shell">
        <VStack align="center" gap={6}>
          <div style={{width: '100%', maxWidth: '720px'}}>
            <img
              src="/assets/product/pendant-front.png"
              alt="Aura pendant — a small, open-source AI device worn around the neck"
              style={{width: '100%', borderRadius: '12px'}}
            />
          </div>

            <VStack align="center" gap={4} style={{maxWidth: '640px'}}>
            <Heading level={1} type="display-1">
              Worn. Screenless. Aware.
            </Heading>

            <Text style={{fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '480px'}}>
              An open-source AI pendant worn around the neck.
              Listens, sees, and remembers — so you don't have to.
            </Text>

            <HStack gap={3} style={{flexWrap: 'wrap', justifyContent: 'center'}}>
              <Link to="/docs#hardware" className="link-chip link-chip--primary">
                Build Yours
              </Link>
              <a href="https://github.com/thesohamdatta/aura" target="_blank" rel="noopener noreferrer" className="link-chip link-chip--secondary">
                View on GitHub →
              </a>
            </HStack>

            <HStack gap={6} style={{flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--spacing-4)'}}>
              <StatBadge value="4 layers" label="Voice, vision, reasoning, memory" />
              <StatBadge value="$50 BOM" label="Off-the-shelf parts only" />
              <StatBadge value="Open source" label="Hardware, firmware, backend, app" />
            </HStack>
          </VStack>
        </VStack>
      </div>
    </Section>
  );
}

function StatBadge({value, label}: {value: string; label: string}) {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '0.9375rem', fontWeight: 600, letterSpacing: '-0.01em'}}>{value}</div>
      <div style={{fontSize: '0.75rem', color: 'var(--color-text-disabled)', marginTop: '2px'}}>{label}</div>
    </div>
  );
}
