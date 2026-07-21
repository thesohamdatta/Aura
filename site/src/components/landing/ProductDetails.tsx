import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';

const specs = [
  {value: '50 × 68 × 18mm', label: 'Dimensions'},
  {value: '80g', label: 'Total weight'},
  {value: '4h', label: 'Active listening'},
  {value: 'USB-C', label: 'Charging'},
];

const appFeatures = [
  'Conversation history',
  'Memory timeline',
  'Device control',
  'Plain language search',
];

export function ProductDetails() {
  return (
    <Section style={{padding: 'clamp(3rem, 6vw, 6rem) 0'}}>
      <div className="page-shell">
        <VStack gap={8}>
          <div>
            <div className="section-label">Product details</div>
            <Heading level={2} type="display-2">
              Hardware you can hold. Software that thinks.
            </Heading>
          </div>

          {/* Product image grid */}
          <div className="image-grid image-grid--bento">
            <img
              src="/assets/product/exploded-view.jpg"
              alt="Exploded view of Aura pendant showing internal components"
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}}
            />
            <img
              src="/assets/product/circuit-assembly.png"
              alt="Aura circuit board assembly"
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}}
            />
            <img
              src="/assets/product/internal-view-1.png"
              alt="Internal view of Aura pendant components"
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}}
            />
          </div>

          {/* Specs */}
          <Grid columns={4} style={{gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--spacing-4)'}}>
            {specs.map((spec) => (
              <Card key={spec.label} style={{textAlign: 'center', padding: 'var(--spacing-5)'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em'}}>{spec.value}</div>
                <div style={{fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: 'var(--spacing-1)'}}>{spec.label}</div>
              </Card>
            ))}
          </Grid>

          {/* Companion app */}
          <VStack gap={5}>
            <div>
              <div className="section-label">Companion app</div>
              <Heading level={3} type="display-3">
                Everything captured. Always searchable.
              </Heading>
            </div>

            <HStack gap={6} style={{flexWrap: 'wrap', alignItems: 'flex-start'}}>
              <div style={{flex: '1 1 400px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-4)'}}>
                  <img
                    src="/assets/app/software_screen1.png"
                    alt="Aura companion app — conversation history"
                    style={{width: '100%', borderRadius: '8px'}}
                  />
                  <img
                    src="/assets/app/software_screen2.png"
                    alt="Aura companion app — memory timeline"
                    style={{width: '100%', borderRadius: '8px'}}
                  />
                </div>
              </div>

              <VStack gap={3} style={{flex: '1 1 280px'}}>
                {appFeatures.map((feature) => (
                  <div key={feature} style={{display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)'}}>
                    <div style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0}} />
                    <Text style={{color: 'var(--color-text-secondary)'}}>{feature}</Text>
                  </div>
                ))}
                <Text style={{fontSize: '0.875rem', color: 'var(--color-text-disabled)', marginTop: 'var(--spacing-2)'}}>
                  Ask in plain language. Get the right memory back.
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </div>
    </Section>
  );
}
