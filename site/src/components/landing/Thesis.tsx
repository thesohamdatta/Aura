import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';

export function Thesis() {
  return (
    <Section
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#0A0A0A',
        color: 'var(--color-on-dark)',
      }}
    >
      <div className="page-shell">
        <HStack gap={8} style={{flexWrap: 'wrap', alignItems: 'flex-start'}}>
          <VStack gap={5} style={{flex: '1 1 400px'}}>
            <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)'}}>
              The thesis
            </div>
            <Heading level={2} type="display-1" style={{color: '#F5F5F5', lineHeight: 0.95}}>
              The third device.
            </Heading>
            <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.7, maxWidth: '420px'}}>
              The laptop extended your mind. The phone connected it to the world. Aura makes the same promise — ambient, always, invisible.
            </Text>
          </VStack>

          <div style={{flex: '1 1 360px'}}>
            <Card style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: 'var(--spacing-6)'}}>
              <VStack gap={5}>
                <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)'}}>
                  Built to stay out of the way
                </div>
                <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.7}}>
                  One object. One pocket-sized compute path. One less reason to check a screen.
                </Text>
                <Card style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: 'var(--spacing-5)'}}>
                  <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 'var(--spacing-2)'}}>
                    Built for less than $50
                  </div>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.6, fontSize: '0.9375rem'}}>
                    Off-the-shelf components. No proprietary parts. Sourced from Seeed Studio and Amazon.
                  </Text>
                </Card>
              </VStack>
            </Card>
          </div>
        </HStack>
      </div>
    </Section>
  );
}
