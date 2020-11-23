import { StatsContainer, Label, Quantity } from './styles';

const Stats = ({ followers, views, likes }) => {
  return (
    <StatsContainer>
      <li>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </li>
    </StatsContainer>
  );
};

export default Stats;
