// @flow
import { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NS_COMMON } from '@/components/i18n';
import { uuid } from '../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const CVariantsDropDown = ({
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
}) => {
    const { t } = useTranslation(NS_COMMON);
    const [id] = useState(uuid());

    const setActive = (label, opts) => {
        const newOpts = opts.map(op => {
            op.active = label === op.label
            return op;
        });
        return newOpts;
    }

    const [dropdownOptions, setDropdownOptions] = useState();

    return (
        <DropdownButton
            key={uuid()}
            id={'dropdown-variants'}
            variant={variant.toLowerCase()}
            title={title}
            className={dropdownButtonClasse}
        >
            <Dropdown.Menu style={{ width: '100vw' }}>
                {options.map(data => {
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
    onClick,
    drop
}) => {

    const setActive = (label, opts) => {
        const newOpts = opts.map(op => {
            op.active = label === op.label
            return op;
        });
        return newOpts;
    }

    const [dropdownOptions, setDropdownOptions] = useState();
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
            <Dropdown.Menu style={{ width: '100vw' }}>
                {dropdownOptions?.map(data => {
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
