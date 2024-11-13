import React, {useCallback, useMemo} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ContextLoginType, loginParams} from '@_types/auth.type';
import {loginSchema} from '@utils/schema';
import {useDispatch} from 'react-redux';
import {getRequestToken} from '@redux/action/authActions';

export const LoginContext = React.createContext({} as ContextLoginType);

export const LoginProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    trigger,
    formState: {errors, isValid},
  } = useForm<loginParams>({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const onSubmit = useCallback((dataParams: loginParams): void => {
    console.log(dataParams);
    dispatch(getRequestToken(dataParams));
  }, []);

  const value = useMemo<ContextLoginType>(
    () => ({
      control,
      handleSubmit,
      trigger,
      errors,
      isValid,
      onSubmit,
    }),
    [control, handleSubmit, trigger, errors, isValid, onSubmit],
  );

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
