import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';
import {Link} from 'react-router-dom';

const repos = [
  {name: 'hardware/', status: 'open'},
  {name: 'firmware/', status: 'open'},
  {name: 'backend/', status: 'open'},
  {name: 'site/', status: 'open'},
];

const stats = [
  {value: 'MIT', label: 'License'},
  {value: '$50', label: 'Bill of materials'},
  {value: '4', label: 'Code surfaces'},
];

export function OpenSource() {
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
              Open source
            </div>
            <Heading level={2} type="display-2" style={{color: '#F5F5F5'}}>
              Built by students. Owned by everyone.
            </Heading>
            <Text style={{color: 'rgba(245,245,245,0.7)', lineHeight: 1.7, maxWidth: '420px'}}>
              Every component is open. Hardware, firmware, backend, app — inspect, modify, and build with total freedom.
            </Text>
            <HStack gap={3} style={{flexWrap: 'wrap'}}>
              <a href="https://github.com/thesohamdatta/aura" target="_blank" rel="noopener noreferrer" className="link-chip link-chip--primary">
                View on GitHub →
              </a>
              <Link to="/docs" className="link-chip link-chip--secondary" style={{borderColor: 'rgba(255,255,255,0.2)', color: '#F5F5F5'}}>
                Read the docs →
              </Link>
            </HStack>
          </VStack>

          <div style={{flex: '1 1 360px'}}>
            <Card style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: 'var(--spacing-6)'}}>
              <VStack gap={4}>
                <div style={{fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)'}}>
                  Repository map
                </div>
                <div className="code-list">
                  {repos.map((repo) => (
                    <div key={repo.name} className="code-list-row">
                      <span style={{color: 'rgba(245,245,245,0.85)'}}>{repo.name}</span>
                  <span style={{color: 'rgba(245,245,245,0.35)', fontSize: '0.8125rem'}}>{repo.status}</span>
                    </div>
                  ))}
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-4)'}}>
                  {stats.map((stat) => (
                    <div key={stat.label} style={{textAlign: 'center'}}>
                      <div style={{fontSize: '1.5rem', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em'}}>{stat.value}</div>
                      <div style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '4px'}}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </VStack>
            </Card>
          </div>
        </HStack>
      </div>
    </Section>
  );
}
