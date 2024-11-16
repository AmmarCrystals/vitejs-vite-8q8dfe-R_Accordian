import { useEffect } from 'react';

const Gett = () => {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const dataOne = await fetch('https://fakestoreapi.com/products');
    const dataTwo = await dataOne.json();
    console.log(dataTwo);
  }
};

export default Gett;
