import React, { useContext } from 'react';
import Card from '../Card/Card.component';
import CardRow from './CardList.styled';
import VideoContext from '../../state/VideoProvider';

function CardList() {
  const { state } = useContext(VideoContext);
  const { data } = state;
  const { items } = data;

  return (
    <>
      {items && (
        <CardRow>
          {items.map((item, index) => (
            <Card
              key={item.etag}
              item={item}
              tabIndex={index}
              targetRoute="/videoDetail"
            />
          ))}
        </CardRow>
      )}
    </>
  );
}

export default CardList;
