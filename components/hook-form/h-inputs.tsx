// @flow
// @ts-nocheck
import { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NS_COMMON } from '@/components/i18n';
import { uuid } from '../utils';

export const Checkbox = (props) => {
  const { t } = useTranslation(NS_COMMON);
  const [id] = useState(uuid());
  const { register, setValue } = useFormContext();

  const { name, label, rules } = props;

  return (
    <Form.Check
      id={id}
      {...register(name, rules)}
      onChange={(e) => setValue(name, e.target.checked, { shouldDirty: true, shouldValidate: true })}
      {...props}
      label={t(label === true ? name : label)}
      type="checkbox"
    />
  );
};

export const HRadio = (props) => {
  const { t } = useTranslation(NS_COMMON);
  const [id] = useState(uuid());
  const { register } = useFormContext();

  const { name, label, rules } = props;

  return (
    <div>
      <Form.Check id={id} {...register(name, rules)} {...props} type="radio" label={t(label === true ? name : label)} />
    </div>
  );
};

export const RadioGroup = ({ data, id, name, rules, onSelectChange, defaultValue, itemDisabled, ...restProps }) => {
  const { t } = useTranslation(NS_COMMON);
  const {
    formState: { errors },
    getValues,
    register,
  } = useFormContext();

  const error = errors[name];
  const [isCheck, setIsCheck] = useState();

  useEffect(() => {
    setIsCheck(defaultValue);
  }, [defaultValue !== '']);

  return (
    <div className={classNames('group-radio', { 'is-invalid': !!error })}>
      {data.map((item, idx) => (
        <Form.Check
          id={`${id}${idx}`}
          key={idx.toString()}
          name={name}
          {...restProps}
          {...register(name, rules)}
          type="radio"
          value={item.value}
          label={t(item.label)}
          disabled={item.value === itemDisabled}
        />
      ))}
    </div>
  );
};

RadioGroup.defaultProps = {
  rules: {},
  onSelectChange: () => {},
  defaultValue: '',
  itemDisabled: null,
};

export const Switch = (props) => {
  const [id] = useState(uuid());
  const { register } = useFormContext();
  const { t } = useTranslation(NS_COMMON);

  const { name, label } = props;

  return (
    <Form.Control
      id={id}
      {...register(name, rules)}
      {...props}
      label={label === true ? t(name) : t(label)}
      type="switch"
    />
  );
};

export type Props = PropsWithChildren<{
  rules?: {
    required:
      | string
      | boolean
      | {
          value: boolean;
          message: string;
        };
    min:
      | string
      | number
      | {
          value: string | number;
          message: string;
        };
    max:
      | string
      | number
      | {
          value: string | number;
          message: string;
        };
    maxLength:
      | string
      | number
      | {
          value: string | number;
          message: string;
        };
    minLength:
      | string
      | number
      | {
          value: string | number;
          message: string;
        };
    pattern:
      | RegExp
      | {
          value: RegExp;
          message: string;
        };
    validate: (value: string | number | object) => string;
  };
  xs?: [ColumnProps];
  sm?: [ColumnProps];
  md?: [ColumnProps];
  lg?: [ColumnProps];
  xl?: [ColumnProps];
  inputProps?: any;
  name: string;
  row?: boolean;
  label?: string;
  helpText?: string;
  labelProps: LabelProps;
}>;

export const HField: FunctionComponent<Props> = ({
  children,
  row,
  name,
  label,
  labelProps,
  tag: Tag,
  rules,
  as,
  render,
  inputProps,
  xs,
  sm,
  md,
  lg,
  xl,
  helpText,
  pandingInput,
  ...restProps
}: Props) => {
  const [id] = useState(uuid());
  const { t } = useTranslation(NS_COMMON);
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  let input = null;
  if (as || render) {
    input = <Controller rules={rules} name={name} id={id} as={as} render={render} {...inputProps} control={control} />;
  } else {
    input = <Tag {...register(name, rules)} isInvalid={!!errors[name]} {...inputProps} name={name} id={id} />;
  }

  const helpElem = helpText ? <small className="form-text text-muted">{helpText}</small> : null;

  let feedbackText = null;
  if (errors[name] && errors[name].message !== null) {
    const { [name]: error } = errors;

    const rule = rules[error.type];

    if (error.message) feedbackText = error.message;
    else if (error.message !== '' && rule) {
      const ruleValues = rule.value !== undefined ? rule : { value: rule };

      (feedbackText = error.type), ruleValues;
    } else {
      feedbackText = error.type;
    }
  }

  const feedback = feedbackText && (
    <Form.Control.Feedback className="d-block" type="invalid">
      {feedbackText}
    </Form.Control.Feedback>
  );

  if (!label)
    return (
      <Form.Group {...restProps}>
        {input}
        {feedback}
        {helpElem}
        {children}
      </Form.Group>
    );

  if (row) {
    return (
      <Form.Group {...restProps} className={classNames('form-row', restProps.className)}>
        <Form.Label
          {...labelProps}
          className={classNames(labelProps?.className || '', { required: rules.required })}
          xs={xs[0]}
          sm={sm[0]}
          md={md[0]}
          lg={lg[0]}
          xl={xl[0]}
          htmlFor={id}
        >
          {t(label === true ? name : label)}
        </Form.Label>

        <Col xs={xs[1]} sm={sm[1]} md={md[1]} lg={lg[1]} xl={xl[1]} className={pandingInput}>
          {input}
          {feedback}
          {helpElem}
        </Col>

        {children}
      </Form.Group>
    );
  }

  return (
    <Form.Group {...restProps}>
      <Form.Label
        {...labelProps}
        htmlFor={id}
        className={classNames(labelProps?.className || '', { required: rules.required })}
      >
        {t(label === true ? name : label)}
      </Form.Label>
      {input}
      {feedback}
      {helpElem}
      {children}
    </Form.Group>
  );
};
HField.defaultProps = {
  rules: {},
  tag: Form.Control,
  row: false,
  label: '',
  helpText: null,
  labelProps: null,
  inputProps: null,
  xs: [],
  sm: [],
  md: [],
  lg: [],
  xl: [],
};

export const HFeedback = ({ name, rules }: { name: string; rules?: object }) => {
  const { t } = useTranslation(NS_COMMON);
  const { errors } = useFormContext();

  const error = errors[name];

  if (!error) return null;

  let feedbackText = null;
  const rule = rules[error.type];

  if (error.message) feedbackText = error.message;
  else {
    const ruleValues = rule?.value !== undefined ? rule : { value: rule };

    (feedbackText = error.type), ruleValues;
  }

  if (!feedbackText) return null;

  return <div className="d-block invalid-feedback">{t(feedbackText)}</div>;
};
HFeedback.defaultProps = {
  rules: {},
};
