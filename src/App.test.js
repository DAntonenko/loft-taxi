import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/Map/Map.jsx', () => ({ Map: () => null }))

describe('App', () => {
  it('renders correctly', () => {
    const {container} = render(<App />)
    expect(container.innerHTML).toHaveClass('visually-hidden')
  })
})
