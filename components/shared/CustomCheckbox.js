/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Text, ListItem, CheckBox, Body } from "native-base";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import theme from "../../Theme";
import { errorRenderer } from "../../utils/yupFormSchemas";

const { COLORS } = theme;

const CustomCheckbox = ({ checked, onPress, control, label, name, errors, requiredErrorMessage }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: requiredErrorMessage }}
      render={(props) => (
        <>
          <ListItem style={{ marginLeft: 0, borderBottomWidth: 0 }}>
            <CheckBox {...props} color={COLORS.DEFAULT} checked={checked} onPress={onPress} />
            <Body style={{ marginLeft: 4 }}>
              <Text style={{ fontSize: 16 }}>{label}</Text>
            </Body>
          </ListItem>
          {errorRenderer(errors, name)}
        </>
      )}
    />
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  lable: PropTypes.string.isRequired,
  requiredErrorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

CustomCheckbox.defaultProps = {
  requiredErrorMessage: false,
};

export default CustomCheckbox;
