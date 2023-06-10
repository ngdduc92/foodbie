// @flow
import { type HTMLAttributes } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import { Collapse, Form } from 'react-bootstrap';

type Props = HTMLAttributes<HTMLFormElement> & {
  methods: object,
  onSubmit: (values: object) => void,
};

export const HForm = ({ methods, onSubmit, onError, innerRef, ...props }: Props) => {
  return (
    <FormProvider {...methods}>
      <Form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          return methods.handleSubmit(onSubmit, onError)(e);
        }}
        {...props}
        ref={innerRef}
      />
    </FormProvider>
  );
};
