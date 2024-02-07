import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageHeader from '../PageHeader';

describe('PageHeader Component', () => {
  test('Header Component에 포함되어 있는 단어가 잘 보여야 한다', () => {
    render(
      <MemoryRouter>
        <PageHeader />
      </MemoryRouter>
    );
    const existedTexts = ['bono-log', 'about', 'posts'];

    existedTexts.forEach((text) => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
