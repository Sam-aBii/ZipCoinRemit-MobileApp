import React from "react";
import { Label } from "native-base";
import PropTypes from "prop-types";
import PhoneInput from "react-native-phone-input";
import { Controller } from "react-hook-form";

import theme from "../../Theme";
import { errorRenderer } from "../../utils/yupFormSchemas";

const { COLORS } = theme;

const CustomPhoneInput = ({ name, label, control, setValue, errors, requiredMessage }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredMessage }}
      render={({ onBlur, value, ref }) => (
        <>
          <Label style={{ fontSize: 15, color: COLORS.inputLabelColor }}>{label}</Label>
          <PhoneInput
            onBlur={onBlur}
            value={value}
            ref={ref}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: COLORS.inputBorderColor,
              paddingTop: 3,
              paddingRight: 5,
              paddingBottom: 7,
              marginTop: 4,
            }}
            onChangePhoneNumber={(number) => setValue(name, number)}
            pickerBackgroundColor={COLORS.SECONDARY}
            textProps={{ placeholder: "Mobile number" }}
          />
          {errorRenderer(errors, name)}
        </>
      )}
    />
  );
};

CustomPhoneInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  // eslint-disable-next-line
  control: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // eslint-disable-next-line
  errors: PropTypes.object.isRequired,
};

CustomPhoneInput.defaultProps = {
  requiredMessage: "",
};

export default CustomPhoneInput;
