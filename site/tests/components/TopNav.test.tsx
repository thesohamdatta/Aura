import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {SiteNav} from '../../src/components/layout/TopNav';

// The Astryx TopNav renders brand and navItems as props to a custom component.
// The brand is a React element, not plain text. We test what's actually in the DOM.
describe('SiteNav', () => {
  it('renders the Build Yours CTA', () => {
    render(<MemoryRouter><SiteNav /></MemoryRouter>);
    expect(screen.getByText('Build Yours')).toBeInTheDocument();
  });

  it('renders a navigation landmark', () => {
    render(<MemoryRouter><SiteNav /></MemoryRouter>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the Build Yours link with correct href', () => {
    render(<MemoryRouter><SiteNav /></MemoryRouter>);
    const link = screen.getByText('Build Yours');
    expect(link).toHaveAttribute('href', '/docs#hardware');
  });
});
