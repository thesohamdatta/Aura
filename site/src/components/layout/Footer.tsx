import {Link} from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer" style={{background: 'var(--color-background-body)'}}>
      <div className="page-shell">
        <div className="footer-grid">
          <div className="footer-column">
            <Link to="/" style={{textDecoration: 'none', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.01em', display: 'block', marginBottom: 'var(--spacing-3)'}}>
              Aura
            </Link>
            <p style={{fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '280px'}}>
              Open-source wearable AI from Pune. Built to be worn, not watched.
            </p>
          </div>

          <div className="footer-column">
            <h4>Build</h4>
            <ul>
              <li><Link to="/docs#hardware">Build Yours</Link></li>
              <li><Link to="/docs#bill-of-materials">Bill of Materials</Link></li>
              <li><Link to="/docs#bom-case">Assembly Guide</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Learn</h4>
            <ul>
              <li><Link to="/docs">Documentation</Link></li>
              <li><Link to="/ai">AI Pipeline</Link></li>
              <li><Link to="/manifesto">Manifesto</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com/thesohamdatta/aura" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://zenodo.org" target="_blank" rel="noopener noreferrer">CHI '26 Paper</a></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: 'var(--spacing-8)', paddingTop: 'var(--spacing-6)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--spacing-3)'}}>
          <span style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)'}}>
            2026 Aura Project. MIT Licensed.
          </span>
          <span style={{fontSize: '0.8125rem', color: 'var(--color-text-disabled)'}}>
            Pune, India
          </span>
        </div>
      </div>
    </footer>
  );
}
