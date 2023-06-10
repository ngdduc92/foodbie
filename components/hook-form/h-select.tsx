/* eslint-disable eqeqeq */
// @flow
import { useState, useEffect, type FunctionComponent } from 'react';
import classNames from 'classnames';
import { NS_COMMON } from '@/components/i18n';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import Select, { components as RSComponents, type MenuListComponentProps, Props as RProps } from 'react-select';
import { HField, type Props as HFieldProps } from './h-inputs';

const styles = {
  multiValue: (base, state) => (state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base),
  multiValueLabel: (base, state) =>
    state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base,
  multiValueRemove: (base, state) => (state.data.isFixed ? { ...base, display: 'none' } : base),
};

type Props = HFieldProps &
  RProps & {
    loadOptions?: () => Promise<{ data: object[] }>,
    onInitOptions?: () => void,
    isMulti?: boolean,
    noSelectAll?: boolean,
    isSearchable?: boolean,
    isClearable?: boolean,
    required?: required,
    optionLabel?: string,
    components?: object,
    isDisabled?: boodlean,
  };

export const HSelect: FunctionComponent<Props> = ({
  loadOptions,
  isMulti,
  noSelectAll,
  isSearchable,
  isDisabled,
  isClearable,
  required,
  optionLabel,
  inputProps,
  className,
  onInitOptions,
  filterOption,
  options: propOps,
  components,
  rules,
  maxLength,
  ...props
}: Props) => {
  const { placeholder } = props;
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const { setValue, formState } = useFormContext();
  const { t } = useTranslation(NS_COMMON);

  const { name } = props;

  useEffect(() => {
    if (loadOptions) {
      loadOptions()
        .then(({ data }) => {
          setOptions(data);
          onInitOptions(data);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Select
      name={name}
      components={{ ...components }}
      options={loadOptions ? options : propOps}
      isLoading={loading}
      isMulti={isMulti}
      noSelectAll={noSelectAll}
      isDisabled={isDisabled}
      styles={styles}
      isSearchable={isSearchable}
      isClearable={isClearable}
      filterOption={filterOption}
      optionLabel={t(optionLabel || name)}
      placeholder={t(placeholder || '-- Any --')}
      noOptionsMessage={() => t('No {{type}} Available', { type: t(optionLabel || name) })}
      className={classNames(className, 'react-select', { 'is-invalid': !!formState.errors[name], required })}
      classNamePrefix={classNames('react-select')}
      onChange={values => setValue(name, values)}
    />
  );
};
HSelect.defaultProps = {
  loadOptions: null,
  required: false,
  isMulti: false,
  noSelectAll: false,
  isSearchable: true,
  isClearable: true,
  optionLabel: null,
  onInitOptions: () => { },
  components: {},
  isDisabled: false,
  maxLength: null,
};