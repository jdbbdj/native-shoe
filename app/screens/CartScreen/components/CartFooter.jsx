import { View, Text } from "react-native";
import Footer from "../../../components/Footer";
import Global from "../../../GlobalStyling";
const CartFooter = ({}) => {
  return (
    <View style={[Global.shadowMotherContainer, Global.globalMarginHorizontal]}>
      <View style={Global.shadowChildElevated}>
        <Footer />
      </View>
    </View>
  );
};

export default CartFooter;
