import React from 'react';
import Stats from './Stats';
import Description from './Description';
import { Container } from './styles';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description avatar={avatar} name={name} location={location} tag={tag} />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </Container>
  );
};

Profile.defaultProps = {
  location: 'undefined',
  avatar: '#',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
