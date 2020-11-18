import React from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";
import { StatusBar, Text } from "react-native";
import PropTypes from "prop-types";

import theme from "../../Theme";
import globalStyles from "../../styles";

const { COLORS } = theme;

const CustomHeader = ({ onPress, screenTitle, iconName, onCancel, showCancelBtn }) => {
  return (
    <Header style={globalStyles.header}>
      <StatusBar backgroundColor={COLORS.SECONDARY} barStyle="light-content" />
      <Left style={globalStyles.headerLeft}>
        <Button transparent>
          <Icon name={iconName} onPress={onPress} />
        </Button>
      </Left>
      <Body style={globalStyles.headerBody}>
        <Title style={globalStyles.headerScreenTitle}>{screenTitle}</Title>
      </Body>
      {showCancelBtn && (
        <Right>
          <Button transparent onPress={onCancel}>
            <Text style={{ ...globalStyles.btnSecondaryText, color: COLORS.WHITE }}>Cancel</Text>
          </Button>
        </Right>
      )}
    </Header>
  );
};

CustomHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line
  onCancel: function (props) {
    if (props.showCancelBtn && !props.onCancel) {
      return new Error("Please provide an onCancel handler");
    }
  },
  screenTitle: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  showCancelBtn: PropTypes.bool,
};

CustomHeader.defaultProps = {
  iconName: "menu",
  showCancelBtn: false,
};

export default CustomHeader;
