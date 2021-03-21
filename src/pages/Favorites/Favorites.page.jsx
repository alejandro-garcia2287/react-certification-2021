import React, { useContext } from 'react';
import { Alert, Jumbotron } from 'react-bootstrap';
import VideoContext from '../../state/VideoProvider';
import CardRow from '../../components/CardList/CardList.styled';
import Card from '../../components/Card/Card.component';
import { H1, Title } from '../Home/Home.page.styled';

function Favorites() {
  const { state } = useContext(VideoContext);
  const { favoritesList } = state;

  if (!favoritesList || favoritesList.length === 0) {
    return (
      <Jumbotron>
        <Alert variant="warning"> You don&apos;t have favorite videos.</Alert>
      </Jumbotron>
    );
  }

  return (
    <>
      <Title>
        <H1>Favorites Videos</H1>
      </Title>
      {favoritesList && (
        <CardRow>
          {favoritesList.map((item, index) => (
            <Card
              key={item.etag}
              item={item}
              tabIndex={index}
              targetRoute="/favoriteDetail"
            />
          ))}
        </CardRow>
      )}
    </>
  );
}

export default Favorites;
