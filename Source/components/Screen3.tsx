import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";

const Screen3 = () => {
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
        Slide To Match
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
        FIND YOUR PERFECT PRODUCT
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
        Not sure of where to begin? If you're looking for a product to create a
        certain effect or to help alleviate an ailment, you should try Budbo’s
        patent-pending matching feature.
      </Text>

      <Text></Text>

      {/* Image with owl */}
      <ImageBackground
        source={require("../assets/image.png")}
        style={{ height: 234, width: 345 }}
      ></ImageBackground>
      <ScrollView horizontal style={{ height: 130 }}>
        <Image
          source={require("../assets/tota.png")}
          style={{ top: 10, height: 119.6, width: 97.08 }}
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
            style={{ paddingLeft: 10, top: 20 }}
          >
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/Sliderinbutton.png")}
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
                Find my Perfect Product
              </Text>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Screen3;
