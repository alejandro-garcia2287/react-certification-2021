import React from 'react';
import CardListComponent from '../../components/CardList/CardList.component';
import { H1, Title } from './Home.page.styled';

function Home({ items, selectVideo }) {
  return (
    <>
      <Title>
        <H1>Video playlist</H1>
      </Title>
      <CardListComponent items={items} selectVideo={selectVideo} />
    </>
  );
}

export default Home;
