import React from 'react';
import styled from 'styled-components';

import { baseline, color, typography } from '../style';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid ${color.lightGray};
  border-radius: ${baseline};
  font-family: ${typography.font.body};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: calc(2 * ${baseline} - 1px);
  transition: filter 500ms;

  &:focus {
    filter: drop-shadow(0 0 5px ${color.primary});
  }
`;

const Label = styled.label`
  display: flex;
  font-family: ${typography.font.heading};
  font-size: ${typography.fontSize.h4.xs};
  justify-content: space-between;
  line-height: ${typography.lineHeight.h4.xs};
  margin-bottom: calc(2 * ${baseline});
`;

const Textarea = styled.textarea`
  border: 1px solid ${color.lightGray};
  border-radius: ${baseline};
  font-family: ${typography.font.body};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: calc(2 * ${baseline} - 1px);
  transition: filter 500ms;

  &:focus {
    filter: drop-shadow(0 0 5px ${color.primary});
  }
`;

type OptionalNoticeProps = {
  className?: string;
};

const OptionalNotice: React.FC<OptionalNoticeProps> = ({ className }) => (
  <i className={className}>* optional</i>
);

const StyledOptionalNotice = styled(OptionalNotice)`
  font-family: ${typography.font.body};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
`;

type Props = {
  className?: string;
  label: string;
  max?: number;
  min?: number;
  name: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  pattern?: string;
  required?: boolean;
  type: string;
  value?: string;
};

const FormControl: React.FC<Props> = ({
  className,
  label,
  max,
  min,
  name,
  onChange,
  pattern,
  required,
  type,
  value,
}) =>
  type === 'textarea' ? (
    <Div className={className}>
      <Label htmlFor={name}>
        {label}
        {required || <StyledOptionalNotice />}
      </Label>
      <Textarea
        id={name}
        name={name}
        onChange={onChange}
        required={required}
        spellCheck
        value={value}
      />
    </Div>
  ) : (
    <Div className={className}>
      <Label htmlFor={name}>
        {label}
        {required || <StyledOptionalNotice />}
      </Label>
      <Input
        id={name}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        pattern={pattern}
        required={required}
        type={type}
        value={value}
      />
    </Div>
  );

export default FormControl;
