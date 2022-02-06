import {useField} from '@formiz/core';
import {FormControl, Input, Stack} from 'native-base';
import React, {useEffect, useState} from 'react';

export const CustomInput = React.forwardRef((props, ref) => {
  const {id, isValid, isSubmitted, resetKey, setValue, value, errorMessage} =
    useField(props);

  const {
    label,
    helper,
    placeholder,
    type,
    isDisabled,
    required,
    formatValue,
    keepValue,
    asyncValidations,
    defaultValue,
    ...otherProps
  } = props;

  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const handleBlur = () => {
    if (isTouched) {
      return;
    }
    setIsTouched(true);
  };

  return (
    <FormControl
      isRequired={!!required}
      isInvalid={showError}
      isDisabled={isDisabled}
      mb={3}>
      <Stack>
        {!!label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          ref={ref}
          id={id}
          type={type || 'text'}
          value={value ?? ''}
          onChangeText={setValue}
          onBlur={handleBlur}
          placeholder={placeholder}
          autoCapitalize="none"
          {...otherProps}
        />
        {!!helper && <FormControl.HelperText>{helper}</FormControl.HelperText>}

        <FormControl.ErrorMessage>
          {showError && errorMessage}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
});

CustomInput.displayName = 'CustomInput';
