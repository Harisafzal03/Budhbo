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

const Screen5 = () => {
  return (
    <View style={{ padding: 20, backgroundColor: "#fff" }}>
      <Text
        style={{
          fontSize: 26,
          color: "black",
          fontWeight: "700",
          fontFamily: "Gilroy-Light",
        }}
      >
        Swipe to Discover
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
        “PUFF OR PASS” YOUR WAY THROUGH LOCAL PRODUCTS
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "black",
          fontWeight: "500",
          fontFamily: "Gilroy-Light",
          lineHeight: 20,
        }}
      >
        Scrolling through menu after menu is boring. So we’ve made it fun! Use
        Budbo’s “Tinder” like swiping feature and quickly flip through 1000s of
        locally available products to find that needle-in-a-haystack product or
        strain you’ve been looking for!
      </Text>
      <Text></Text>
      {/* Image with owl */}
      <ImageBackground
        source={require("../assets/Screen5.png")}
        style={{ height: 300, width: 374.18 }}
      ></ImageBackground>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ height: 130 }}
      >
        <Image
          source={require("../assets/tota.png")}
          style={{ top: 10, height: 119.6, width: 97.92 }}
        ></Image>
        <TouchableOpacity
          style={{
            top: 35,
            paddingLeft: 10,
            height: 62,
            width: 243,
            borderColor: "#E0DBED",
            backgroundColor: "#E0DBED",
            borderRadius: 8,
          }}
        >
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
            showsHorizontalScrollIndicator={false}
            style={{ paddingLeft: 50, top: 20 }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/screen5avatar.png")}
            />
            <View>
              <Text
                style={{
                  paddingLeft: 8,
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#6E2DFA",
                }}
              >
                Puff or Pass
              </Text>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Screen5;
