// @flow
import { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NS_COMMON } from '@/components/i18n';
import { uuid } from '../../../components/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CDropdownProps {
  variant: string;
  title: string;
  options: any[];
  isDivider: boolean;
  dropdownButtonClasse: string;
  menuClasse: string;
  itemClass: string;
  children: any;
  active: string | number;
  onClick: Function;
}

export const CDropdown = ({
  variant,
  title,
  options,
  isDivider,
  dropdownButtonClasse,
  menuClasse,
  itemClass,
  children,
  active,
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

  const [dropdownOptions, setDropdownOptions] = useState([]);

  return (
    <DropdownButton
      key={uuid()}
      id={'dropdown-variants'}
      variant={variant.toLowerCase()}
      title={title}
      className={dropdownButtonClasse}
    >
      <Dropdown.Menu className={menuClasse} style={{ width: '100vw' }}>
        {options.map((data: any) => {
          return (
            <div key={uuid()}>
              <Dropdown.Item
                className={itemClass}
                onClick={() => {
                  setDropdownOptions(setActive(data.label, dropdownOptions))
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
    </DropdownButton>
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
      {titleButton && <Button variant={variant.toLowerCase()}>{titleButton}</Button>}
      <Dropdown.Toggle split variant={variant.toLowerCase()} className={toggleClasse}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu className={menuClasse} style={{ width: '100vw' }}>
        {dropdownOptions?.map((data: any) => {
          return (
            <div key={uuid()}>
              <Dropdown.Item
                className={itemClass}
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
