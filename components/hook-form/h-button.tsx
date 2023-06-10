/* eslint-disable react/destructuring-assignment */
// @flow
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { NS_COMMON } from '@/components/i18n';

export const HButton = ({ ...props }) => {
  const { t } = useTranslation(NS_COMMON);
  const { formState } = useFormContext();
  const temp = useFormContext();
  const { isSubmitting, dirtyFields } = formState;
  const spinnerClasses = classNames('me-2', { 'd-none': !isSubmitting && !props.icon });

  useEffect(() => {
  }, [isSubmitting]);

  return (
    <Button
      id="btnSubmit"
      color="success"
      {...props}
      disabled={!Object.keys(dirtyFields).length || isSubmitting || props.disabled}
    >
      <FontAwesomeIcon
        icon={isSubmitting ? faSpinner : props.icon || faSpinner}
        spin={isSubmitting}
        fixedWidth
        className={spinnerClasses}
      />

      {props.children || t(props.saveTitle)}
    </Button>
  );
};
HButton.defaultProps = {
  saveTitle: 'Save',
};
