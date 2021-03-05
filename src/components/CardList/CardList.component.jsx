import React from 'react';
import Card from '../Card/Card.component';
import CardRow from './CardList.styled';

function CardList({ items, selectVideo }) {
  return (
    <>
      {items && (
        <CardRow>
          {items.map((item, index) => (
            <Card
              key={item.etag}
              item={item}
              selectVideoFunction={selectVideo}
              tabIndex={index}
            />
          ))}
        </CardRow>
      )}
    </>
  );
}

export default CardList;
