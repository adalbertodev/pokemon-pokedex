import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Button color='gradient'>Click me</Button>
    </>
  );
};

export default HomePage;
