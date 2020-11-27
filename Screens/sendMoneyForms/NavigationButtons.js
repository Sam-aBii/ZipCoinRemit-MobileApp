import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "native-base";

import theme from "../../Theme";

const { COLORS } = theme;

const NavigationButtons = ({ onPressNext, onPressBack, renderNext, renderBack }) => {
  return (
    <View style={styles.iconsContainer}>
      {renderBack && (
        <View style={styles.icon}>
          <TouchableOpacity onPress={onPressBack}>
            <Icon type="FontAwesome" name="chevron-circle-left" style={{ color: COLORS.SECONDARY, fontSize: 72 }} />
          </TouchableOpacity>
        </View>
      )}
      {renderNext && (
        <View style={{ ...styles.icon, marginLeft: "auto" }}>
          <TouchableOpacity onPress={onPressNext}>
            <Icon type="FontAwesome" name="chevron-circle-right" style={{ color: COLORS.SECONDARY, fontSize: 72 }} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default NavigationButtons;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  icon: {
    margin: 4,
  },
});

NavigationButtons.propTypes = {
  renderNext: PropTypes.bool,
  renderBack: PropTypes.bool,
  onPressNext: (props, propName) => {
    if (props.renderNext === true && (props[propName] === undefined || typeof props[propName] !== "function")) {
      return new Error("Please provide an onPressNext function!");
    }
  },
  onPressBack: (props, propName) => {
    if (props.renderBack === true && (props[propName] === undefined || typeof props[propName] !== "function")) {
      return new Error("Please provide an onPressBack function!");
    }
  },
};

NavigationButtons.defaultProps = {
  renderNext: true,
  renderBack: true,
  onPressNext: () => {},
  onPressBack: () => {},
};
