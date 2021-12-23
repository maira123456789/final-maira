import React, { useContext } from 'react';
import { Button, InputNumber, List } from 'antd';
// import { List } from 'rc-field-form';
import { favoriteContext } from '../../contexts/favoriteContext';

const FavoritesItem = ({item}) => {
    const { deleteFromFavorite } = useContext(favoriteContext);
    return (
        <List.Item
        key={item.id}
        extra={<img width={272} alt="img" src={item.item.image2} />}
      >
        <List.Item.Meta
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div>
                <h3>{item.item.brand}</h3>
                <h4>{item.item.model}</h4>
              </div>
              <h3>{"$" + item.item.price}</h3>
            </div>
          }
          description={
            <>
              <div>{item.item.description}</div>
  
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "40%",
                  marginTop: "20px",
                }}
              >
              </div>
              <Button onClick={() => deleteFromFavorite(item.item.id)}>
                Remove from favorites
              </Button>
            </>
          }
        />
      </List.Item>
    );
};

export default FavoritesItem;