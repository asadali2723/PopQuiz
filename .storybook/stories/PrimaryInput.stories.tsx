import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import PrimaryInput from '../../src/components/resuableComponent/primaryInput'; // Adjust the path as necessary
import {AppText} from '../../src/components/resuableComponent/appText'; // Adjust the path as necessary
import {colors} from '../../src/constants/colors';

export default {
  title: 'Components/PrimaryInput',
  component: PrimaryInput,
};

const FormWrapper = ({
  children,
  control,
}: {
  children: React.ReactNode;
  control: any;
}) => {
  return (
    <View style={styles.container}>
      {children}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {control});
        }
        return child;
      })}
    </View>
  );
};

export const Default = () => {
  const {control} = useForm();
  return (
    <FormWrapper control={control}>
      <AppText>Default Input</AppText>
      <PrimaryInput
        control={control}
        fieldName="inputField"
        placeholder="Enter text"
        error="This field is required"
        keyboardType="default"
      />
    </FormWrapper>
  );
};

export const WithError = () => {
  const {control} = useForm();
  return (
    <FormWrapper control={control}>
      <AppText style={styles.errorText}>With Error</AppText>
      <PrimaryInput
        control={control}
        fieldName="inputField"
        placeholder="Enter text"
        error="This field is required"
        keyboardType="default"
      />
    </FormWrapper>
  );
};

export const SecureInput = () => {
  const {control} = useForm();
  return (
    <FormWrapper control={control}>
      <AppText>Secure Input</AppText>
      <PrimaryInput
        control={control}
        fieldName="secureField"
        placeholder="Enter secure text"
        isSecure={true}
        error="This field is required"
      />
    </FormWrapper>
  );
};

export const MultilineInput = () => {
  const {control} = useForm();
  return (
    <FormWrapper control={control}>
      <AppText>Multiline Input</AppText>
      <PrimaryInput
        control={control}
        fieldName="multilineField"
        placeholder="Enter multiline text"
        multiline={true}
        error="This field is required"
      />
    </FormWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: colors.red.fieldError,
    marginBottom: 10,
  },
});
