import {useField} from '@formiz/core';
import {FormControl, Stack} from 'native-base';
import React, {memo, useEffect, useState} from 'react';
import type {AutocompleteDropdownProps} from 'react-native-autocomplete-dropdown';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

import {Colors} from '~/styles';

const CustomAutocompleteDropdown = React.forwardRef(
  (props: AutocompleteDropdownProps, ref) => {
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
        mb={3}
        zIndex={99}>
        <Stack>
          {!!label && <FormControl.Label mt={2}>{label}</FormControl.Label>}

          <AutocompleteDropdown
            ref={ref}
            id={id}
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            onSelectItem={data => {
              setIsTouched(true);
              setValue(data?.id ? +data?.id : undefined);
            }}
            containerStyle={{
              borderWidth: 1,
              borderColor: showError ? Colors.RED : Colors.GALLERY,
              justifyContent: 'center',
              borderRadius: 4,
            }}
            textInputProps={{
              placeholder: 'Size',
              autoCorrect: false,
              autoCapitalize: 'none',
              style: {
                backgroundColor: Colors.WHITE,
              },
            }}
            inputHeight={50}
            rightButtonsContainerStyle={{backgroundColor: Colors.WHITE}}
            {...props}
          />

          <FormControl.ErrorMessage>
            {showError && errorMessage}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    );
  },
);

CustomAutocompleteDropdown.displayName = 'CustomAutocompleteDropdown';

export default memo(CustomAutocompleteDropdown);
