import { View, Text } from "react-native";
import Footer from "../../../components/Footer";
import Global from "../../../GlobalStyling";
const CartFooter = (props) => {
  return (
    <View style={[Global.shadowMotherContainer, Global.globalMarginHorizontal]}>
      <View style={Global.shadowChildElevated}>
        <Footer {...props} />
      </View>
    </View>
  );
};

export default CartFooter;
