import {Link, useLocation} from 'react-router-dom';
import {TopNav} from '@astryxdesign/core/TopNav';
import {TopNavHeading} from '@astryxdesign/core/TopNav';
import {TopNavItem} from '@astryxdesign/core/TopNav';

const navItems = [
  {label: 'Home', path: '/'},
  {label: 'AI', path: '/ai'},
  {label: 'Manifesto', path: '/manifesto'},
  {label: 'About', path: '/about'},
  {label: 'Docs', path: '/docs'},
];

export function SiteNav() {
  const location = useLocation();

  return (
    <TopNav
      heading={
        <TopNavHeading
          heading="Aura"
          headingHref="/"
        />
      }
      startContent={
        <>
          {navItems.map((item) => (
            <TopNavItem
              key={item.path}
              label={item.label}
              href={item.path}
              isSelected={location.pathname === item.path}
            />
          ))}
        </>
      }
      endContent={
        <Link to="/docs#hardware" className="link-chip link-chip--primary" style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}>
          Build Yours
        </Link>
      }
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(16px)',
        backgroundColor: 'color-mix(in srgb, var(--color-background-body) 85%, transparent)',
        borderBottom: '1px solid var(--color-border)',
      }}
    />
  );
}
