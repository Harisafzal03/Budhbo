import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";
import NativeRootsCard from "./NativeRootsCard";
import PureSunfarmsCard from "./PureSunfarmsCard";
import Muimaterial from "./Muimaterial";
import { useState } from "react";
import React from "react";

const Screen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);
  const [isPressed5, setIsPressed5] = useState(false);
  const onPress0 = () => {
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
  const onPress4 = () => {
    setIsPressed4(!isPressed4);
  };
  const onPress5 = () => {
    setIsPressed5(!isPressed5);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
      >
        {/* Navigation Bar */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Image source={require("../assets/ab.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/Bg.png")}
                style={{
                  borderRadius: 60,
                  backgroundColor: "#F1EAFE",
                  marginHorizontal: 10,
                  height: 40,
                  width: 40,
                  borderWidth: 30,
                }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/icon5.png")}
                style={{
                  borderRadius: 60,
                  backgroundColor: "#F1EAFE",
                  marginHorizontal: 10,
                  alignSelf: "center",
                  height: 40,
                  width: 40,
                  borderWidth: 30,
                }}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPress}
              style={{ flexDirection: "row" }}
            >
              <Image
                source={require("../assets/icon6.png")}
                style={{
                  borderRadius: 60,
                  backgroundColor: "#F1EAFE",
                  alignSelf: "center",
                  height: 40,
                  width: 40,
                  borderWidth: 30,
                  marginLeft: 12,
                  marginRight: 1,
                  bottom: 6.5,
                }}
              ></Image>
              <TouchableOpacity>
                <View style={styles.circle}>
                  <Text style={styles.text}>{count}</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require("../assets/icon8.png")}
                style={{
                  alignSelf: "center",
                  top: 10,
                  height: 40,
                  marginHorizontal: 10,
                  width: 40,
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Text></Text>
        {/* Page  */}
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 25,
              color: "black",
              fontWeight: "700",
              fontFamily: "Gilroy-Light",
            }}
          >
            Welcome to Budbo
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontFamily: "Gilroy-Light",
            }}
          >
            Budbo's patent-pending AI powered system makes finding and ordering
            the perfect cannabbls products simple,fast, and fun!
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontFamily: "Gilroy-Light",
            }}
          >
            Discover the best products and order directly from the best local
            dispansaries.
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 16,
              color: "black",
              fontFamily: "Gilroy-Light",
            }}
          >
            Get started by clickingone of the buttons below.
          </Text>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              paddingHorizontal: 80,
              paddingVertical: 15,

              width: 344,
              height: 48,
              backgroundColor: "#6E2DFA",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/screen.png")}
            />
            <Text
              style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              Discover Local Products
            </Text>
          </TouchableOpacity>
          <Text></Text>
          {/* Buttons */}
          <TouchableOpacity
            style={{
              borderRadius: 8,
              paddingHorizontal: 40,
              paddingVertical: 11,

              width: 344,
              height: 48,
              backgroundColor: "#E0DBED",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/Sliderinbutton.png")}
            />
            <Text style={{ width: 5 }}></Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontWeight: "700",
                color: "#6E2DFA",
              }}
            >
              Match with your Perfect Product
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          {/* Image with owl */}
          <ImageBackground
            source={require("../assets/match.png")}
            style={{ height: 194.86 }}
          >
            <Image
              source={require("../assets/tota.png")}
              style={{ top: 100, height: 119.6, width: 97.92 }}
            ></Image>
          </ImageBackground>
        </View>

        <View style={{ backgroundColor: "white", paddingLeft: 16 }}>
          <Text></Text>
          <Text></Text>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              fontFamily: "Gilroy-Light",
              color: "black",
            }}
          >
            Popular Products Near You
          </Text>
          <Text></Text>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
            showsHorizontalScrollIndicator={false}
            style={{
              height: 40,

              borderBottomWidth: 1,
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={onPress0}>
              <Text
                style={[
                  styles.text1,
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
                  styles.text1,
                  {
                    color: isPressed1 ? "#6E2DFA" : "#000",
                    fontWeight: isPressed1 ? "bold" : "normal",
                    borderBottomColor: isPressed1 ? "#6E2DFA" : "#000",
                    borderBottomWidth: isPressed1 ? 2 : 0,
                  },
                ]}
              >
                Pre-Rolls
              </Text>
            </TouchableOpacity>
            <View style={{ width: 20 }}></View>
            <TouchableOpacity onPress={onPress2}>
              <Text
                style={[
                  styles.text1,
                  {
                    color: isPressed2 ? "#6E2DFA" : "#000",
                    fontWeight: isPressed2 ? "bold" : "normal",
                    borderBottomColor: isPressed2 ? "#6E2DFA" : "#000",
                    borderBottomWidth: isPressed2 ? 2 : 0,
                  },
                ]}
              >
                Flower
              </Text>
            </TouchableOpacity>
            <View style={{ width: 20 }}></View>
            <TouchableOpacity onPress={onPress3}>
              <Text
                style={[
                  styles.text1,
                  {
                    color: isPressed3 ? "#6E2DFA" : "#000",
                    fontWeight: isPressed3 ? "bold" : "normal",
                    borderBottomColor: isPressed3 ? "#6E2DFA" : "#000",
                    borderBottomWidth: isPressed3 ? 2 : 0,
                  },
                ]}
              >
                Vaporizer
              </Text>
            </TouchableOpacity>
            <View style={{ width: 20 }}></View>
            <TouchableOpacity onPress={onPress4}>
              <Text
                style={[
                  styles.text1,
                  {
                    color: isPressed4 ? "#6E2DFA" : "#000",
                    fontWeight: isPressed4 ? "bold" : "normal",
                    borderBottomColor: isPressed4 ? "#6E2DFA" : "#000",
                    borderBottomWidth: isPressed4 ? 2 : 0,
                  },
                ]}
              >
                Edibles
              </Text>
            </TouchableOpacity>
            <View style={{ width: 20 }}></View>
            <TouchableOpacity onPress={onPress5}>
              <Text
                style={[
                  styles.text1,
                  {
                    color: isPressed5 ? "#6E2DFA" : "#000",
                    fontWeight: isPressed5 ? "bold" : "normal",
                    borderBottomColor: isPressed5 ? "#6E2DFA" : "#000",
                    borderBottomWidth: isPressed5 ? 2 : 0,
                  },
                ]}
              >
                Peddals
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <Text></Text>
          <Screen1 />
        </View>

        <Screen2 />
        <Muimaterial />
        <Screen3 />
        <View style={{ paddingLeft: 16 }}>
          <Screen4 />
          <NativeRootsCard />
          <PureSunfarmsCard />
        </View>
        <Screen5 />
        <Screen6 />
        <Screen7 />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-start",
    backgroundColor: "#F1EAFE",
  },
  circle: {
    left: -20,
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  text1: {
    fontSize: 16,

    textAlign: "center",
    height: 40,
  },
});
