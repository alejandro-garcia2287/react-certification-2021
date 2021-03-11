import React, { useContext } from 'react';
import Card from '../Card/Card.component';
import CardRow from './CardList.styled';
import VideoContext from '../../state/VideoProvider';

function CardList() {
  const { data } = useContext(VideoContext);
  const { items } = data;

  return (
    <>
      {items && (
        <CardRow>
          {items.map((item, index) => (
            <Card key={item.etag} item={item} tabIndex={index} />
          ))}
        </CardRow>
      )}
    </>
  );
}

export default CardList;
