import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

describe('Card Component tests', () => {
  it('Card Description defined', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testDescription')).toBeDefined();
  });

  it('Card Title defined', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testTitle')).toBeDefined();
  });

  it('Card Title type', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testTitle').tagName).toBe('B');
  });

  it('Card Description type', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testDescription').tagName).toBe('P');
  });

  it('Card Description class', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testDescription').classList).toHaveLength(2);
  });

  it('Card Title class', () => {
    render(<Card imgSrc="testImgSrc" title="testTitle" description="testDescription" />);
    expect(screen.getByText('testTitle').classList).toHaveLength(0);
  });
});
