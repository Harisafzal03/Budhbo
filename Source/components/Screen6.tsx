import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

const Screen6 = () => {
  return (
    <View>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 26,
            color: "black",
            fontWeight: "700",
            fontFamily: "Gilroy-Light",
          }}
        >
          Earn Rewards
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#736B8E",
            fontFamily: "Gilroy-Light",
            lineHeight: 27,
          }}
        >
          EARN AND BURN JUST FOR USING BUDBO
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: "black",
            fontWeight: "500",
            fontFamily: "Gilroy-Light",
            includeFontPadding: true,
            lineHeight: 20,
          }}
        >
          When it comes to shopping for cannabis online, we know you have
          options. Budbo’s innovative wallet rewards you just for using Budbo.
          Earn tokens by inviting your friends, writing reviews, ordering from a
          retailer, and by using our Match and Discover functions.
        </Text>
        <Text></Text>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            fontWeight: "500",
            fontFamily: "Gilroy-Light",
            lineHeight: 20,
          }}
        >
          It’s our way of saying ‘Thank you’ for choosing Budbo, and that you
          deserve to be rewarded!
        </Text>
      </View>

      <Text></Text>
      {/* Image with owl */}
      <View style={{ padding: 10 }}>
        <ImageBackground
          source={require("../assets/Screen6.png")}
          style={{ height: 226.18, width: 359.85 }}
        ></ImageBackground>
      </View>
      <View style={{ bottom: 70 }}>
        <View style={{ paddingLeft: 209, top: 88 }}>
          <Image source={require("../assets/Screen6(2).png")} />
        </View>
        <View style={{ paddingLeft: 98 }}>
          <Image source={require("../assets/Screen6(1).png")} />
        </View>
        <View style={{ paddingLeft: 12, bottom: 70 }}>
          <Image source={require("../assets/Screen6(3).png")} />
        </View>
      </View>
    </View>
  );
};

export default Screen6;
