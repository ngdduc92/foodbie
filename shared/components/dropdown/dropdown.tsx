// @flow
import { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NS_COMMON } from '@/components/i18n';
import { uuid } from '../../../components/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CDropdownProps {
  variant?: string;
  options: any[];
  isDivider?: boolean;
  dropdownClasse?: string;
  toggleClasse?: string;
  menuClasse?: string;
  itemClass?: string;
  onClick: Function;
}

export const CDropdown = ({
  variant = 'light',
  options,
  isDivider = true,
  dropdownClasse,
  toggleClasse,
  menuClasse,
  itemClass,
  onClick
}: CDropdownProps) => {
  const { t } = useTranslation(NS_COMMON);
  const [id] = useState(uuid());

  const setActive = (label: string, opts: any) => {
    const newOpts = opts.map((op: any) => {
      op.active = label === op.label
      return op;
    });
    return newOpts;
  }

  const [title, setTitle] = useState(options.find(o => o.active == true).label);

  const [dropdownOptions, setDropdownOptions] = useState(options);
  return (
    <Dropdown
      key={uuid()}
      id={'dropdown-variants'}
      className={dropdownClasse}>
      <Dropdown.Toggle
        variant={variant.toLowerCase()}
        className={toggleClasse}
      >
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className={menuClasse} style={{ width: '100vw' }}>
        {dropdownOptions.map((data: any) => {
          return (
            <div key={uuid()}>
              <Dropdown.Item
                className={`${itemClass} py-3 text-dark`}
                onClick={() => {
                  setDropdownOptions(setActive(data.label, dropdownOptions))
                  setTitle(data.label);
                  onClick(data)
                }}
              >
                {data.label}
                {data.active && <FontAwesomeIcon icon={faCheck} className="text-primary" />}
              </Dropdown.Item>
              {isDivider && <Dropdown.Divider />}
            </div>)
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
interface CSplitDropDownProps {
  variant: string;
  titleButton: string;
  titleToggle: string;
  options: any[];
  isDivider: boolean;
  dropdownButtonClasse: string;
  menuClasse: string;
  itemClass: string;
  children: any;
  toggleClasse: string;
  active: string | number;
  onClick: Function;
}

export const CSplitDropDown = ({
  variant,
  titleButton,
  titleToggle,
  options,
  isDivider,
  dropdownButtonClasse,
  menuClasse,
  itemClass,
  children,
  toggleClasse,
  active,
  onClick
}: CSplitDropDownProps) => {

  const setActive = (label: string, opts: any) => {
    const newOpts = opts.map((op: any) => {
      op.active = label === op.label
      return op;
    });
    return newOpts;
  }

  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [title, setTitle] = useState(titleToggle);

  useEffect(() => {
    setDropdownOptions(setActive(titleToggle, options));
  }, []);

  const { t } = useTranslation(NS_COMMON);
  const [id] = useState(uuid());

  return (
    <Dropdown
      key={uuid()}
      id="dropdown-split"
      className={dropdownButtonClasse}
    >
      {titleButton &&
        <Button variant={variant?.toLowerCase()}>{titleButton}</Button>}
      <Dropdown.Toggle split variant={variant?.toLowerCase()} className={toggleClasse}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className={menuClasse} style={{ width: '100vw' }}>
        {dropdownOptions?.map((data: any) => {
          return (
            <div key={uuid()}>
              <Dropdown.Item
                className={`${itemClass} py-3 border border-light text-dark`}
                onClick={() => {
                  setDropdownOptions(setActive(data.label, dropdownOptions))
                  setTitle(data.label);
                  onClick(data)
                }}
              >
                {data.value}
                {data.active && <FontAwesomeIcon icon={faCheck} className="text-primary" />}
              </Dropdown.Item>
              {isDivider && <Dropdown.Divider />}
            </div>)
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
