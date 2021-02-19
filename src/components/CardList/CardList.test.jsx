import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList.component';
import mockedData from '../../youtube-videos-mock.json';
import filterItems from './CardList';

const { items } = mockedData;

describe('CardList test', () => {
  it('selects an element using the returned value', () => {
    const { getByText } = render(<CardList items={items} />);
    expect(getByText('Video Tour | Welcome to Wizeline Guadalajara').tagName).toBe('B');
  });

  describe('Items filter function', () => {
    it('No parameters should return original elements ', function () {
      const originalSize = items.length;
      const filteredItems = filterItems(items);
      expect(filteredItems).toBeDefined();
      expect(filteredItems.length).toBe(originalSize);
    });

    it('Filter by description', function () {
      const filteredItems = filterItems(items, 'Wizeline');
      expect(filteredItems).toBeDefined();
      expect(filteredItems.length).toBe(16);
    });

    it('Filter by title', function () {
      const filteredItems = filterItems(items, 'Mexico City');
      expect(filteredItems).toBeDefined();
      expect(filteredItems.length).toBe(3);
    });

    it('Filter by description and Title', function () {
      const filteredItems = filterItems(items, 'Wizeline', 'Mexico City');
      expect(filteredItems).toBeDefined();
      expect(filteredItems.length).toBe(2);
    });

    it('Filter by wrong description and Title', function () {
      const filteredItems = filterItems(items, 'Guadalajara', 'Mexico City');
      expect(filteredItems).toBeDefined();
      expect(filteredItems.length).toBe(0);
    });
  });
});
