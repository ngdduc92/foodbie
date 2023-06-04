import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './login.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import authService from '@/services/auth';
import HeaderOption from '@/components/headerOption';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [email, password] = watch(['email', 'password']);
  const loginSteps = [
    {
      id: 1,
      title: 'Login with google',
      link: '/',
    },
    {
      id: 2,

      title: 'Login with Facebook',
      link: '/',
    },
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    authService.login(data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('API_TOKEN', res.data.accessToken);
        router.push('/');
      } else {
        setErrorMessages(true);
      }
    });
  };

  const handleRenderBtn = () =>
    loginSteps.map((loginStep) => (
      <div key={loginStep.id} className="rounded border border-secondary p-2 my-4 position-relative">
        <a href={loginStep.link} className="d-block">
          <img
            className="position-absolute start-0 top-50 translate-middle-y ms-3"
            src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
          />
          <span className="fs-3 fw-bold">{loginStep.title}</span>
        </a>
      </div>
    ));

  return (
    <div className="container-fluid">
      <HeaderOption title={'Log In / Sign Up'} />
      <div className="row justify-content-center text-center">
        <div className="col col-md-6 align-self-center mt-5">
          <Link href="/">
            <img
              className={clsx(style.LoginLogo)}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJvop9nmQGn1posiz4Z1YAaCwSqQ5u-VP5A&usqp=CAU"
              alt=""
            />
          </Link>
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex align-items-center border-bottom py-4">
              <FontAwesomeIcon icon={faUser} className="fs-1" />
              <div className="d-flex flex-column w-100 ">
                <input
                  placeholder="Email/Username"
                  className="flex-grow-1 ms-3 border-0"
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {/* {errors?.email && <span className="mt-2 text-danger text-center">{errors.email.message}</span>} */}
              </div>
            </div>
            <div className="d-flex align-items-center border-bottom py-4">
              <FontAwesomeIcon icon={faLock} className="fs-1" />
              <div className="d-flex w-100 align-items-center">
                <input
                  placeholder="Password"
                  className="flex-grow-1 ms-3 border-0"
                  {...register('password', { required: 'Password is required' })}
                  type={passwordShown ? 'text' : 'password'}
                />
                <div>
                  <FontAwesomeIcon
                    icon={passwordShown ? faEye : faEyeSlash}
                    className="pe-3"
                    onClick={() => setPasswordShown(!passwordShown)}
                  />
                  <span className="text-info ps-3 border-start border-secondary">Forgot?</span>
                </div>
                {/* {errors?.password && <span className="mt-2 text-danger text-center">{errors.password.message}</span>}
                {errorMessages && <span className="mt-2 text-danger text-center">Invalid username or password</span>} */}
              </div>
            </div>

            <div className="mt-4 d-grid">
              <Button
                disabled={email.length > 0 && password.length > 0 ? false : true}
                className="py-3"
                type="submit"
                variant="primary"
                size="lg"
              >
                <span className="text-white fs-2">Log in</span>
              </Button>
            </div>
          </form>
          <p className="text-end my-3 text-info">Login in width SMS</p>
          <div className={clsx(style.LoginOr)}>
            <span>or</span>
          </div>
          <div className={clsx(style.LoginMainStep)}>{handleRenderBtn()}</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
