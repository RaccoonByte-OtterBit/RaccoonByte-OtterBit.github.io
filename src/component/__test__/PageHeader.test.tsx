import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeader from '../PageHeader';

describe('PageHeader Component', () => {
  test('Header Componet에 포함되어 있는 단어가 잘 보여야 한다', () => {
    render(<PageHeader />);
    const existedTexts = ['bono-log', 'about', 'pages'];

    existedTexts.forEach((text) => {
      const element = screen.getByText(text);
      expect(element).toBeInTheDocument();
    });
  });
});
