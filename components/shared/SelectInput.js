import React, { useState } from "react";
import { Icon, Picker } from "native-base";
import PropTypes from "prop-types";
import Typograpghy from "../../Theme";

const { COLORS } = Typograpghy;
const CustomPicker = ({ items, iosHeader }) => {
  const [value, setValue] = useState(null);
  return (
    <Picker
      mode="dropdown"
      iosHeader={iosHeader}
      iosIcon={<Icon name="arrow-down" />}
      style={{ marginBottom: -5, marginLeft: 5, color: COLORS.DEFAULT }}
      placeholder="Please select your Country"
      selectedValue={value}
      onValueChange={setValue}
    >
      {items.length > 0 && items.map(({ name, id }) => <Picker.Item label={name} key={id} value={id} />)}
    </Picker>
  );
};

CustomPicker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired, id: PropTypes.string.isRequired }))
    .isRequired,
  iosHeader: PropTypes.string.isRequired,
};

export default CustomPicker;
