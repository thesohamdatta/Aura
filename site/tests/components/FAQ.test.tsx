import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {FAQ} from '../../src/components/landing/FAQ';

describe('FAQ', () => {
  it('renders the section label', () => {
    render(<MemoryRouter><FAQ /></MemoryRouter>);
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<MemoryRouter><FAQ /></MemoryRouter>);
    expect(screen.getByText('Questions.')).toBeInTheDocument();
  });

  it('renders all six questions', () => {
    render(<MemoryRouter><FAQ /></MemoryRouter>);
    expect(screen.getByText('What does Aura actually capture?')).toBeInTheDocument();
    expect(screen.getByText('Is my data private?')).toBeInTheDocument();
    expect(screen.getByText('How fast does it respond?')).toBeInTheDocument();
    expect(screen.getByText('Can I build one myself?')).toBeInTheDocument();
    expect(screen.getByText('What phone does it work with?')).toBeInTheDocument();
    expect(screen.getByText('How long does the battery last?')).toBeInTheDocument();
  });

  it('renders the GitHub prompt', () => {
    render(<MemoryRouter><FAQ /></MemoryRouter>);
    expect(screen.getByText(/open an issue on GitHub/)).toBeInTheDocument();
  });
});
