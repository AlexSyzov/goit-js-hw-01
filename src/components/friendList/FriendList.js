import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar = '#', name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
