import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Screen4 = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const onPress = () => {
    setIsPressed(!isPressed);
  };
  const onPress1 = () => {
    setIsPressed1(!isPressed1);
  };
  const onPress2 = () => {
    setIsPressed2(!isPressed2);
  };
  const onPress3 = () => {
    setIsPressed3(!isPressed3);
  };
  return (
    <View>
      <Text></Text>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 24,
          color: "#000",
          fontFamily: "Gilroy-Light",
        }}
      >
        Popular Retailers Near You
      </Text>

      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{
          height: 40,

          borderBottomWidth: 1,
          width: 266,
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[
              styles.text,
              {
                color: isPressed ? "#6E2DFA" : "#000",
                fontWeight: isPressed ? "bold" : "normal",
                borderBottomColor: isPressed ? "#6E2DFA" : "#000",
                borderBottomWidth: isPressed ? 2 : 0,
              },
            ]}
          >
            ALL
          </Text>
        </TouchableOpacity>
        <View style={{ width: 20 }}></View>
        <TouchableOpacity onPress={onPress1}>
          <Text
            style={[
              styles.text,
              {
                color: isPressed1 ? "#6E2DFA" : "#000",
                fontWeight: isPressed1 ? "bold" : "normal",
                borderBottomColor: isPressed1 ? "#6E2DFA" : "#000",
                borderBottomWidth: isPressed1 ? 2 : 0,
              },
            ]}
          >
            Recreational
          </Text>
        </TouchableOpacity>
        <View style={{ width: 20 }}></View>
        <TouchableOpacity onPress={onPress2}>
          <Text
            style={[
              styles.text,
              {
                color: isPressed2 ? "#6E2DFA" : "#000",
                fontWeight: isPressed2 ? "bold" : "normal",
                borderBottomColor: isPressed2 ? "#6E2DFA" : "#000",
                borderBottomWidth: isPressed2 ? 2 : 0,
              },
            ]}
          >
            Medical
          </Text>
        </TouchableOpacity>
        <View style={{ width: 20 }}></View>
        <TouchableOpacity onPress={onPress3}>
          <Text
            style={[
              styles.text,
              {
                color: isPressed3 ? "#6E2DFA" : "#000",
                fontWeight: isPressed3 ? "bold" : "normal",
                borderBottomColor: isPressed3 ? "#6E2DFA" : "#000",
                borderBottomWidth: isPressed3 ? 2 : 0,
              },
            ]}
          >
            CBD
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Text></Text>
    </View>
  );
};

export default Screen4;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,

    textAlign: "center",
    height: 40,
  },
});
