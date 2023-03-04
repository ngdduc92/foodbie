import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './Login.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
type Inputs = {
  example: string;
  exampleRequired: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example'));

  const loginSteps = [
    {
      title: 'Login with google',
      link: '/',
    },
    {
      title: 'Login with Facebook',
      link: '/',
    },
  ];
  const handleRenderBtn = () =>
    loginSteps.map((loginStep, index) => (
      <div key={index} className={clsx(style.SiginBtn)}>
        <Link href={loginStep.link} className={clsx(style.SiginLink)}>
          <img src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg" />
          <span>{loginStep.title}</span>
        </Link>
      </div>
    ));

  return (
    <div className={clsx(style.LoginWrapper)}>
      <div className={clsx(style.LoginContainer)}>
        <div className={clsx(style.LoginContent)}>
          <div>
            <Link href="/">
              <img
                className={clsx(style.LoginLogo)}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJvop9nmQGn1posiz4Z1YAaCwSqQ5u-VP5A&usqp=CAU"
              />
            </Link>
            <h1 className={clsx(style.LoginTitle)}>Login</h1>
            <div className={clsx(style.LoginBody)}>
              <form className={clsx(style.LoginFormBody)} onSubmit={handleSubmit(onSubmit)}>
                <div className={clsx(style.FormControlWrapper)}>
                  <label className={clsx(style.FormControlLabel)}>Email</label>
                  <div className={clsx(style.FormControlInput)}>
                    <input {...register('example')} />
                  </div>
                </div>
                <div className={clsx(style.FormControlWrapper)}>
                  <label className={clsx(style.FormControlLabel)}>Password</label>
                  <div className={clsx(style.FormControlInput)}>
                    <input {...register('exampleRequired', { required: true })} type="PassWord" />
                  </div>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <Link href="/">
                  <button type="submit" className={clsx(style.LoginBtn)}>
                    <div className={clsx(style.LoginBtnInner)}>
                      <span>Login</span>
                    </div>
                  </button>
                </Link>
              </form>
            </div>
            <div className={clsx(style.LoginOr)}>
              <span>or</span>
            </div>
            <div className={clsx(style.LoginMainStep)}>{handleRenderBtn()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
