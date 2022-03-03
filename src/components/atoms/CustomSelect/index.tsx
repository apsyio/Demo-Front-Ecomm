import {useField} from '@formiz/core';
import {FormControl, Select, Stack} from 'native-base';
import React, {memo, useEffect, useState} from 'react';

const CustomSelect = React.forwardRef((props, ref) => {
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

  return (
    <FormControl
      isRequired={!!required}
      isInvalid={showError}
      isDisabled={isDisabled}
      mb={3}>
      <Stack>
        {!!label && <FormControl.Label mt={2}>{label}</FormControl.Label>}
        <Select
          ref={ref}
          id={id}
          selectedValue={value}
          onValueChange={e => setValue(e)}
          minWidth="200"
          onClose={() => setIsTouched(true)}
          {...props}>
          {props?.options?.map(item => (
            <Select.Item key={item.value} {...item} />
          ))}
        </Select>
        <FormControl.ErrorMessage>
          {showError && errorMessage}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
});

CustomSelect.displayName = 'CustomSelect';

export default memo(CustomSelect);
