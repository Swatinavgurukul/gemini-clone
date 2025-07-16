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
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-sm mx-auto">
      <input {...register('countryCode')} placeholder="Country Code" className="input" />
      <input {...register('phone')} placeholder="Phone Number" className="input" />
      <button type="submit" className="btn mt-4">Send OTP</button>
    </form>
  );
};