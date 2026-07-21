import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {vi} from 'vitest';
import {Capabilities} from '../../src/components/landing/Capabilities';

// Mock the Astryx Icon component since it doesn't render in jsdom
vi.mock('@astryxdesign/core/Icon', () => ({
  Icon: ({name, ...props}: any) => <span data-testid={`icon-${name}`} {...props} />,
}));

describe('Capabilities', () => {
  it('renders the section label', () => {
    render(<MemoryRouter><Capabilities /></MemoryRouter>);
    expect(screen.getByText('Core capabilities')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<MemoryRouter><Capabilities /></MemoryRouter>);
    expect(screen.getByText('Three senses. One pendant.')).toBeInTheDocument();
  });

  it('renders three capability cards', () => {
    render(<MemoryRouter><Capabilities /></MemoryRouter>);
    expect(screen.getByText(/Speak once/)).toBeInTheDocument();
    expect(screen.getByText(/camera adds context/)).toBeInTheDocument();
    expect(screen.getByText(/Every exchange stays findable/)).toBeInTheDocument();
  });

  it('renders technical details for each capability', () => {
    render(<MemoryRouter><Capabilities /></MemoryRouter>);
    expect(screen.getByText('Sub-second capture')).toBeInTheDocument();
    expect(screen.getByText('GPT-4o Vision')).toBeInTheDocument();
    expect(screen.getByText('Vector recall')).toBeInTheDocument();
  });
});
