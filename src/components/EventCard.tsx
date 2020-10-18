import { Link } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import FixedImage from './FixedImage';
import { baseline, typography } from '../style';

const DATE_FORMAT_OPTIONS = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const TIME_FORMAT_OPTIONS = {
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
};

const DateAndTime = styled.p`
  margin-bottom: 0;
`;

const StyledFixedImage = styled(FixedImage)`
  flex-shrink: 0;
  height: calc(18 * ${baseline});
  margin-right: calc(3 * ${baseline});
  width: calc(18 * ${baseline});
`;

const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  padding: calc(3 * ${baseline});

  &:hover {
    text-decoration: none;
  }
`;

const Title = styled.p`
  font-family: ${typography.font.heading};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0;
`;

type Props = {
  className?: string;
  date: string;
  image?: {
    description?: string;
    fixed: FixedObject;
  };
  slug: string;
  title: string;
};

const EventCard: React.FC<Props> = ({
  className,
  date,
  image,
  slug,
  title,
}) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toLocaleDateString(
    undefined,
    DATE_FORMAT_OPTIONS
  );

  const timeString = dateObject.toLocaleTimeString(
    undefined,
    TIME_FORMAT_OPTIONS
  );

  return (
    <Card className={className}>
      <StyledLink to={`/events/${slug}`}>
        <StyledFixedImage
          image={image}
          imageWrapperStyle={{ display: 'block' }}
          placeholderIcon={['far', 'calendar']}
          placeholderIconSize={`calc(12 * ${baseline})`}
        />
        <div>
          <Title>{title}</Title>
          <DateAndTime>
            <time dateTime={date}>
              {dateString} <br />
              {timeString}
            </time>
          </DateAndTime>
        </div>
      </StyledLink>
    </Card>
  );
};

export default EventCard;
