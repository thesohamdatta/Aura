import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';

export function Research() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0', background: 'var(--color-background-muted)'}}>
      <div className="page-shell">
        <HStack gap={8} style={{flexWrap: 'wrap', alignItems: 'flex-start'}}>
          <VStack gap={5} style={{flex: '1 1 400px'}}>
            <div className="section-label">Research</div>
            <Heading level={2} type="display-2">
              Peer-reviewed, not hand-waved.
            </Heading>
            <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7}}>
              Accepted at CHI 2026. The paper and dataset are open access.
            </Text>
            <HStack gap={3} style={{flexWrap: 'wrap'}}>
              <a href="https://zenodo.org" target="_blank" rel="noopener noreferrer" className="link-chip link-chip--primary">
                Read the paper →
              </a>
              <a href="https://dl.acm.org" target="_blank" rel="noopener noreferrer" className="link-chip link-chip--secondary">
                ACM Digital Library →
              </a>
            </HStack>
          </VStack>

          <div style={{flex: '1 1 360px'}}>
            <Card style={{padding: 'var(--spacing-6)'}}>
              <VStack gap={4}>
                <div className="section-label" style={{color: 'var(--color-text-secondary)'}}>CHI '26</div>
                <Heading level={3} type="display-3">
                  Aura: An Open-Source, Screenless Wearable AI Companion for Ambient Assistance
                </Heading>
                <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.9375rem'}}>
                  A peer-reviewed paper presenting the design, implementation, and evaluation of an open-source screenless wearable AI system for ambient assistance.
                </Text>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)'}}>
                  <Card style={{background: 'var(--color-background-muted)', padding: 'var(--spacing-4)'}}>
                    <div style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-disabled)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--spacing-1)'}}>Latency</div>
                    <div style={{fontSize: '0.9375rem', color: 'var(--color-text-secondary)'}}>Real-time transcribe and respond</div>
                  </Card>
                  <Card style={{background: 'var(--color-background-muted)', padding: 'var(--spacing-4)'}}>
                    <div style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-disabled)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--spacing-1)'}}>Memory</div>
                    <div style={{fontSize: '0.9375rem', color: 'var(--color-text-secondary)'}}>Semantic recall across sessions</div>
                  </Card>
                </div>

                <Text style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)'}}>
                  Karande et al. · 2026 · Zenodo DOI: 10.5281/zenodo.10684321
                </Text>
              </VStack>
            </Card>
          </div>
        </HStack>
      </div>
    </Section>
  );
}
