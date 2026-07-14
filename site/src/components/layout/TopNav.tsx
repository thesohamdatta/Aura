import {Link, useLocation} from 'react-router-dom';
import {TopNav as AstryxTopNav, TopNavItem} from '@astryxdesign/core/TopNav';

// A wrapper that converts href to the to prop of Link
const RouterLink = ({href, children, ...props}: any) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

export function TopNav() {
  const location = useLocation();

  return (
    <AstryxTopNav
      heading={
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          Aura
        </Link>
      }
      endContent={
        <a
          href="/docs#hardware"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 18px',
            background: 'var(--color-accent)',
            color: '#ffffff',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Build Yours
        </a>
      }
    >
      <TopNavItem
        href="/"
        label="Overview"
        isSelected={location.pathname === '/'}
        as={RouterLink}
      />
      <TopNavItem
        href="/docs"
        label="Docs"
        isSelected={location.pathname === '/docs'}
        as={RouterLink}
      />
    </AstryxTopNav>
  );
}

