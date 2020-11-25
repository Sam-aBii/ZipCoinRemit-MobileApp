import React from "react";
import { Item, Label, Input } from "native-base";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import { errorRenderer } from "../../utils/yupFormSchemas";

const CustomTextInput = ({ name, label, control, setValue, errors, requiredMessage, keyboardType, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredMessage }}
      render={({ onBlur, value, name: inputName, ref }) => {
        return (
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ marginBottom: -4 }}>{label}</Label>
            <Input
              style={{ marginTop: 0 }}
              onChangeText={(v) => setValue(inputName, v)}
              value={value}
              name={inputName}
              ref={ref}
              onBlur={onBlur}
              keyboardType={keyboardType}
              {...rest}
            />
            {errorRenderer(errors, name)}
          </Item>
        );
      }}
    />
  );
};

CustomTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  // eslint-disable-next-line
  control: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // eslint-disable-next-line
  errors: PropTypes.object.isRequired,
  keyboardType: PropTypes.string,
};

CustomTextInput.defaultProps = {
  requiredMessage: "",
  keyboardType: "default",
};

export default CustomTextInput;
