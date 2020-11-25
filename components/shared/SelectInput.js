/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-indent-props */
import React from "react";
import { Icon, Picker, Label, Text } from "native-base";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { errorRenderer } from "../../utils/yupFormSchemas";

const CustomPicker = ({ items, iosHeader, control, name, errors, requiredMessage, label, onChange, selectedValue }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: requiredMessage }}
      defaultValue=""
      render={({ name: inputName, ref }) => (
        <>
          <Label style={{ fontSize: 15, color: "#919191" }}>{label}</Label>
          <Picker
            name={inputName}
            ref={ref}
            mode="dropdown"
            iosHeader={iosHeader}
            iosIcon={<Icon name="arrow-down" />}
            selectedValue={selectedValue}
            style={{ marginTop: -3, marginLeft: -8, marginBottom: -10 }}
            onValueChange={onChange}
          >
            <Picker.Item label={label} value="" />
            {items.length > 0 &&
              items.map(({ name: itemName, id: v }) => <Picker.Item label={itemName} key={v} value={v} />)}
          </Picker>
          <Text style={{ height: 0, borderBottomWidth: 1, borderBottomColor: "#d9d5dc" }} />
          {errorRenderer(errors, name)}
        </>
      )}
    />
  );
};

CustomPicker.propTypes = {
  errors: PropTypes.object.isRequired,
  requiredMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired, id: PropTypes.string.isRequired }))
    .isRequired,
  iosHeader: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

CustomPicker.defaultProps = {
  requiredMessage: false,
};

export default CustomPicker;
