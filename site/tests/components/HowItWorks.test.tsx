import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {HowItWorks} from '../../src/components/landing/HowItWorks';

describe('HowItWorks', () => {
  it('renders the section label', () => {
    render(<MemoryRouter><HowItWorks /></MemoryRouter>);
    expect(screen.getByText('How it works')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<MemoryRouter><HowItWorks /></MemoryRouter>);
    expect(screen.getByText('Hear. Think. Remember.')).toBeInTheDocument();
  });

  it('renders three steps in order', () => {
    render(<MemoryRouter><HowItWorks /></MemoryRouter>);
    expect(screen.getByText('Transcribe')).toBeInTheDocument();
    expect(screen.getByText('Reason')).toBeInTheDocument();
    expect(screen.getByText('Remember')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<MemoryRouter><HowItWorks /></MemoryRouter>);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders the note about simplicity', () => {
    render(<MemoryRouter><HowItWorks /></MemoryRouter>);
    expect(screen.getByText('The pipeline is simple on purpose.')).toBeInTheDocument();
  });
});
