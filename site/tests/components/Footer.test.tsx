import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Footer} from '../../src/components/layout/Footer';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Aura')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText(/Open-source wearable AI from Pune/)).toBeInTheDocument();
  });

  it('renders Build column links', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Build Yours')).toBeInTheDocument();
    expect(screen.getByText('Bill of Materials')).toBeInTheDocument();
    expect(screen.getByText('Assembly Guide')).toBeInTheDocument();
  });

  it('renders Learn column links', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('AI Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Manifesto')).toBeInTheDocument();
  });

  it('renders Community column links', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText("CHI '26 Paper")).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders copyright', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText(/2026 Aura Project/)).toBeInTheDocument();
  });

  it('renders location', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Pune, India')).toBeInTheDocument();
  });
});
