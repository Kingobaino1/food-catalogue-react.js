import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Show from '../components/ShowPage';

it('should render a Show component', () => {
  const food = 'beef';
  render(
    <MemoryRouter>
      <Show image={`https://www.themealdb.com/images/category/${food}.png`} />
    </MemoryRouter>,
  );
  expect(screen.getByAltText('food')).toBeInstanceOf(Image);
});
