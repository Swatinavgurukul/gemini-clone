import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

export const AuthForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    setTimeout(() => {
      dispatch(login(data));
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      <input {...register('countryCode')} placeholder="Country Code" className="input" /><br />
      <input {...register('phone')} placeholder="Phone Number" className="input" />
      {/* <button type="submit" className="btn mt-4">Send OTP</button> */}
      <div className="flex justify-center">
        <button type="submit" className="btn">
          Send OTP
        </button>
      </div>
    </form>
  );
};