import { StyleSheet } from "react-native";
import theme from "./Theme";

const { COLORS } = theme;

const styles = StyleSheet.create({
  btnPrimary: {
    borderRadius: 50,
    paddingHorizontal: 12,
    backgroundColor: COLORS.DEFAULT,
  },
  btnSecondary: {
    borderRadius: 50,
    paddingHorizontal: 12,
    backgroundColor: COLORS.SECONDARY,
  },
  btnSecondaryOutlined: {
    borderRadius: 50,
    paddingHorizontal: 12,
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.DEFAULT,
  },
  btnPrimaryText: { fontSize: 16, color: COLORS.WHITE, textTransform: "uppercase" },
  header: {
    backgroundColor: COLORS.SECONDARY,
  },
  headerScreenTitle: {
    marginLeft: 4,
    fontSize: 22,
  },
  headerLeft: {
    flex: 0,
  },
  headerBody: {
    flex: 1,
  },
  btnPrimaryOutlined: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingHorizontal: 12,
    borderColor: COLORS.DEFAULT,
    borderWidth: 1,
  },
  btnSecondaryText: { fontSize: 16, color: COLORS.DEFAULT, textTransform: "uppercase" },
  textDanger: { color: COLORS.DANGER },
  sendMoneyFormTitle: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 4,
    color: COLORS.DEFAULT,
    borderColor: COLORS.DEFAULT,
    marginBottom: 8,
    backgroundColor: COLORS.WHITE,
    marginTop: 8,
  },
  shadow1: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default styles;
