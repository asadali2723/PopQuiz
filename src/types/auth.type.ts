import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormTrigger,
} from 'react-hook-form';

export type loginParams = {
  username: string;
  password: string;
};
export type hooksFormType<T extends FieldValues> = {
  control: Control<T, any> | undefined;
  handleSubmit: UseFormHandleSubmit<T>;
  trigger?: UseFormTrigger<T> | null;
  onSubmit: (val: T) => void;
  errors: FieldErrors<T>;
  isValid: boolean;
};

export type ContextLoginType = hooksFormType<loginParams>;
