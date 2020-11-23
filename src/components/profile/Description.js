import React from 'react';
import { DescrContainer, Avatar, Name, Tag, Location } from './styles';

const Description = ({ avatar, name, tag, location }) => {
  return (
    <DescrContainer>
      <Avatar src={avatar} alt="Аватар пользователя" />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescrContainer>
  );
};

export default Description;
