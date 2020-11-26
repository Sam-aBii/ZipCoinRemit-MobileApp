/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Text, CheckBox, View } from "native-base";
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
        <View style={{ flexDirection: "row", marginLeft: -12, paddingVertical: 18 }}>
          <CheckBox {...props} color={COLORS.DEFAULT} style={{ marginLeft: 0 }} checked={checked} onPress={onPress} />
          <Text style={{ fontSize: 16, marginLeft: 12 }}>{label}</Text>
          {errorRenderer(errors, name)}
        </View>
      )}
    />
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  requiredErrorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

CustomCheckbox.defaultProps = {
  requiredErrorMessage: false,
};

export default CustomCheckbox;
