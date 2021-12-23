import { List } from 'rc-field-form';
import React, { useContext, useEffect } from 'react';
import { favoriteContext } from '../../contexts/favoriteContext';
import FavoritesItem from './FavoritesItem';

const Favorites = () => {
    const { getFavorite, favorite } = useContext(favoriteContext);
    useEffect(() => {
      getFavorite();
    }, []);
  //   console.log(favorite);
    return (
      <div className="container">
        <List
          itemLayout="vertical"
          size="large"
        //   dataSource={cart?.products}
        //   footer={<h2>Total: {cart?.totalPrice}$</h2>}
          renderItem={(item) => <FavoritesItem item={item}/>}
        />
      </div>
    );
  };

export default Favorites;