import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Hero} from '../../src/components/landing/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText('Worn. Screenless. Aware.')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText(/An open-source AI pendant/)).toBeInTheDocument();
  });

  it('renders the Build Yours CTA', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText('Build Yours')).toBeInTheDocument();
  });

  it('renders the GitHub CTA', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText(/View on GitHub/)).toBeInTheDocument();
  });

  it('renders all three stat badges', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText('4 layers')).toBeInTheDocument();
    expect(screen.getByText('$50 BOM')).toBeInTheDocument();
    expect(screen.getByText('Open source')).toBeInTheDocument();
  });

  it('renders the product image', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    const img = screen.getByAltText(/Aura pendant/);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/assets/product/pendant-front.png');
  });
});
