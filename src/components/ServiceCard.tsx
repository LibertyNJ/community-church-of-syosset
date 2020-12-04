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

const DateDisplay = styled.p`
  margin-bottom: 0;
`;

const Preacher = styled.p`
  font-weight: bold;
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
  preacher: {
    name: string;
  };
  slug: string;
  title: string;
};

const ServiceCard: React.FC<Props> = ({
  className,
  date,
  image,
  preacher,
  slug,
  title,
}) => {
  const [year, month, day] = date.split('-');
  const dateObject = new Date(+year, +month - 1, +day);
  const dateString = dateObject.toLocaleDateString(
    undefined,
    DATE_FORMAT_OPTIONS
  );

  return (
    <Card className={className}>
      <StyledLink to={`/services/${slug}`}>
        <StyledFixedImage
          image={image}
          imageWrapperStyle={{ display: 'block' }}
          placeholderIcon="bible"
          placeholderIconSize={`calc(12 * ${baseline})`}
        />
        <div>
          <Title>{title}</Title>
          <DateDisplay>
            <time dateTime={date}>{dateString}</time>
          </DateDisplay>
          <Preacher>{preacher.name}</Preacher>
        </div>
      </StyledLink>
    </Card>
  );
};

export default ServiceCard;
