import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

export type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
  type: 'ordered' | 'unordered';
};

const TitledList: React.FC<Props> = ({ children, className, title, type }) => {
  const List = getListTag(type);
  const listItems = React.Children.map(children, (child, index) => (
    <li key={index}>{child}</li>
  ));

  return (
    <div className={className}>
      <Title>{title}</Title>
      <List>{listItems}</List>
    </div>
  );
};

export default TitledList;

function getListTag(type: 'ordered' | 'unordered') {
  switch (type) {
    case 'ordered':
      return 'ol';
    case 'unordered':
      return 'ul';
    default:
      throw new Error(
        `getListTag function received invalid argument for type parameter: ${type}`
      );
  }
}
