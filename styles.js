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
  btnPrimaryOutlined: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    paddingHorizontal: 12,
    borderColor: COLORS.DEFAULT,
    borderWidth: 1,
  },
  btnSecondaryText: { fontSize: 16, color: COLORS.DEFAULT, textTransform: "uppercase" },
  textDanger: { color: COLORS.DANGER },
});

export default styles;
