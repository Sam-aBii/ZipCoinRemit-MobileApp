import React from "react";
import { Item, Label, Input } from "native-base";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import { errorRenderer } from "../../utils/yupFormSchemas";

const TextInput = ({ name, label, control, setValue, errors, requiredMessage }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredMessage }}
      render={({ onBlur, value, name: inputName, ref }) => {
        return (
          <>
            <Item floatingLabel style={{ marginTop: 0, marginLeft: 0 }}>
              <Label>{label}</Label>
              <Input onChangeText={(v) => setValue(inputName, v)} value={value} name={inputName} ref={ref} onBlur={onBlur} />
            </Item>
            {errorRenderer(errors, name)}
          </>
        );
      }}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  // eslint-disable-next-line
  control: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // eslint-disable-next-line
  errors: PropTypes.object.isRequired,
};

TextInput.defaultProps = {
  requiredMessage: "",
};

export default TextInput;
