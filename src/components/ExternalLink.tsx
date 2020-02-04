import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  download?: boolean;
  href: string;
};

const ExternalLink: React.FC<Props> = ({
  children,
  className,
  download,
  href,
}) => (
  <a
    className={className}
    download={download}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default ExternalLink;
