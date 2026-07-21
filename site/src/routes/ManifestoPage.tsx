import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {SiteNav} from '../components/layout/TopNav';
import {Footer} from '../components/layout/Footer';
import {Link} from 'react-router-dom';

export function ManifestoPage() {
  return (
    <>
      <SiteNav />
      <main style={{flex: 1, background: '#0A0A0A', color: '#F5F5F5'}}>
        {/* Hero */}
        <Section style={{padding: 'clamp(4rem, 8vw, 7rem) 0'}}>
          <div className="content-narrow">
            <VStack gap={5}>
              <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)'}}>
                Manifesto
              </div>
              <Heading level={1} type="display-1" style={{color: '#F5F5F5'}}>
                Humans Need a Third Device
              </Heading>
              <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.7, fontSize: '1.0625rem'}}>
                We have Personal Computers to create, work, and produce things that matter. We have Tiny Supercomputers, or Smartphones, to consume, but we are drawn into the Social Dilemma.
              </Text>
            </VStack>
          </div>
        </Section>

        {/* Article body */}
        <Section style={{padding: '0 0 clamp(4rem, 8vw, 7rem)'}}>
          <div className="content-narrow">
            <VStack gap={8} style={{fontSize: '1.0625rem', lineHeight: 1.8}}>

              <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                But why have humans never built something different?
              </Text>

              <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                They tried. Ten years before smartphones, they made wearables, but added a screen to them. A screen that demands attention, distracts, and takes away from the present.
              </Text>

              <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                That is why we are building Aura.
              </Text>

              <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                A device that combines the productive power of a computer and the connectivity of a smartphone, but with one fundamental difference. It does not pull you in. It works for you quietly in the background, transforming your intent into action without ever asking for your attention.
              </Text>

              <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8, fontWeight: 500}}>
                Less distraction. More done.
              </Text>

              {/* Divider */}
              <div style={{width: '60px', height: '1px', background: 'rgba(255,255,255,0.15)'}} />

              {/* Social Dilemma */}
              <div>
                <Heading level={2} type="display-2" style={{color: '#F5F5F5', marginBottom: 'var(--spacing-5)'}}>
                  Social Dilemma
                </Heading>
                <VStack gap={5}>
                  <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                    The social giants are eating our brains.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    Their influence has a deeply negative impact on our behavior: how we talk, what we see, how we act, and how we live. This effect is changing human nature.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    The smartphone is at the centre of all this. It manipulates our minds without us ever knowing why we do what we do, or how we became this way. We were not like this before.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    For years, we have developed and refined this technology. Some of the greatest engineers in the world have worked on it, hired for one reason: attention. How to capture it, monetize it, and build an empire out of it.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.5)', lineHeight: 1.8, fontStyle: 'italic'}}>
                    There is no escape here.
                  </Text>
                </VStack>
              </div>

              {/* Divider */}
              <div style={{width: '60px', height: '1px', background: 'rgba(255,255,255,0.15)'}} />

              {/* AI Dilemma */}
              <div>
                <Heading level={2} type="display-2" style={{color: '#F5F5F5', marginBottom: 'var(--spacing-5)'}}>
                  AI Dilemma
                </Heading>
                <VStack gap={5}>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    AI is not going to make it good or help us live better in this attention-hijacked world. Instead, AI is changing how we live, what we see, and how we perceive things, often creating digital noise we never wanted. Its impact on our minds is difficult to reverse.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    AI is absolutely revolutionary and can change humanity. But humans are creating AI, AI is creating AI, and AI dominates humans. We are in the Matrix.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8, fontWeight: 500}}>
                    Hence, we believe AI is humanity's last invention.
                  </Text>
                </VStack>
              </div>

              {/* Divider */}
              <div style={{width: '60px', height: '1px', background: 'rgba(255,255,255,0.15)'}} />

              {/* Why Aura */}
              <div>
                <Heading level={2} type="display-2" style={{color: '#F5F5F5', marginBottom: 'var(--spacing-5)'}}>
                  That's Why We Need Aura
                </Heading>
                <VStack gap={5}>
                  <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                    We need a device that does not demand attention, does not bombard us with information, and does not ping us with notifications every second. A device that needs no screen.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.85)', lineHeight: 1.8}}>
                    We need it combining the intelligence of AI and the human mind. The Personal Superintelligence.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.8}}>
                    The least socially disruptive device we've ever needed.
                  </Text>
                  <Text style={{color: 'rgba(245,245,245,0.5)', lineHeight: 1.8}}>
                    Humane AI Pin was the beginning, and its vision will live on.
                  </Text>
                </VStack>
              </div>

              {/* CTA */}
              <div style={{display: 'flex', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-8)', flexWrap: 'wrap'}}>
                <Link to="/ai" className="link-chip link-chip--primary">
                  See how it works →
                </Link>
                <Link to="/docs#hardware" className="link-chip link-chip--secondary" style={{borderColor: 'rgba(255,255,255,0.2)', color: '#F5F5F5'}}>
                  Build one →
                </Link>
              </div>

            </VStack>
          </div>
        </Section>
      </main>
      <div style={{background: '#0A0A0A'}}>
        <Footer />
      </div>
    </>
  );
}
