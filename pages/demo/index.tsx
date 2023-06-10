import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from '../styles/Home.module.scss'
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { HButton, HField, HForm, HSelect } from '@/components/hook-form';
import { type HTMLAttributes } from 'react';

export default function Home() {

    const languageOptions = [
        { value: 'EN', label: 'English' },
        { value: 'ES', label: 'Spanish' },
        { value: 'VI', label: 'Vietnamese' },
        { value: 'ZH', label: 'Chinese' },
        { value: 'TL', label: 'Tagalog' },
    ];

    const methods = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
    });
    const onSubmit = (values) => {
        console.log(12312, values)
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                return resolve()
            }, 1500);
        });
    };
    ``
    return (
        <HForm methods={methods} onSubmit={onSubmit}>
            <h3>{'Reset Password'}</h3>

            <HField
                label
                name="password"
                rules={{ required: true }}
            />

            <HField
                label={'Confirm Password'}
                name="confirmPassword"
            />

            <HField
                label={'Date'}
                inputProps={
                    { type: 'date' }
                }
                name="configDate"
            />

            <HSelect
                placeholder={'Display language'}
                options={languageOptions}
                name="language"
                isClearable={false}
                isMulti
            />

            <HButton id="btnSubmit" color="warning" icon={faSave} saveTitle={'Update'} className="ml-auto" type="submit" />
        </HForm>
    )
}
