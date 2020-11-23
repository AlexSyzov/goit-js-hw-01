import React from 'react';
import { Online, Offline, Avatar, Name, Item } from './styles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <Online /> : <Offline />}

      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
