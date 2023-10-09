import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Grand Daddy Purple",
    image: require("../assets/hi.png"),
    subComponents: [{ id: "a", text: "View Product" }],
  },
  {
    id: "2",
    title: "Card 2",
    image: require("../assets/hi.png"),
    subComponents: [{ id: "c", text: "View Product" }],
  },
  // Add more cards as needed
];
interface CardProps {
  title: string;
  image: ImageSourcePropType;
  subComponents: { id: string; text: string }[];
}

const Screen1 = () => {
  const renderItem = ({
    item,
  }: {
    item: { title: string; image: any; subComponents: any[] };
  }) => (
    <Card
      title={item.title}
      image={item.image}
      subComponents={item.subComponents}
    />
  );
  const [isLiked, setIsLiked] = useState(false);
  const onPress = () => {
    setIsLiked(!isLiked);
  };
  const Card: React.FC<CardProps> = ({ title, image, subComponents }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={image}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require("../assets/heart3.png")}
              style={{
                tintColor: isLiked ? "#6E2DFA" : "#E0DBED",
                borderRadius: 60,

                alignSelf: "flex-end",
                top: 13,
                right: 14,
                height: 22,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.subComponentContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Text
              style={{
                width: 75,
                height: 20,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0DBED",
                backgroundColor: "#E0DBED",
                left: 39,
                top: 5,
                fontSize: 12,
                color: "#6E2DFA",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ★4.8(127)
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../assets/flower.png")}
          />
          <View>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 12,
                fontWeight: "700",
                color: "#736B8E",
                lineHeight: 14,
              }}
            >
              FLOWER
            </Text>
            <Text
              style={{
                paddingLeft: 8,
                fontSize: 12,
                fontWeight: "700",
                color: "#736B8E",
                lineHeight: 14,
              }}
            >
              BY:PURE SUNFARMS
            </Text>
          </View>
        </ScrollView>
        <Text
          style={{
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 2,
            color: "#000",
            fontWeight: "700",
            fontSize: 12,
          }}
        >
          AVAILABLE AT:
        </Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: 10, marginVertical: 5 }}
        >
          <TouchableOpacity
            style={{
              width: 150,
              height: 56,
              borderWidth: 1,
              left: 10,
              borderRadius: 8,
              borderColor: "#E0DBED",
            }}
          >
            <View style={{ padding: 5, flexDirection: "row" }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#E0DBED",
                  borderRadius: 4,
                }}
                source={require("../assets/sun.png")}
              />
              <View>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    fontWeight: "700",
                    color: "#000000",
                  }}
                >
                  Native Roots
                </Text>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    color: "#6E2DFA",
                  }}
                >
                  → $1.7 MIL
                </Text>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    color: "#6E2DFA",
                  }}
                >
                  From:$30
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 56,
              borderWidth: 1,
              left: 10,
              marginHorizontal: 10,
              borderRadius: 8,
              borderColor: "#E0DBED",
            }}
          >
            <View style={{ padding: 5, flexDirection: "row" }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "#E0DBED",
                  borderRadius: 4,
                }}
                source={require("../assets/sun2.png")}
              />
              <View>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    fontWeight: "700",
                    color: "#000000",
                  }}
                >
                  Native Roots
                </Text>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    color: "#6E2DFA",
                  }}
                >
                  → $1.7 MIL
                </Text>
                <Text
                  style={{
                    paddingLeft: 20,

                    fontSize: 10,
                    color: "#6E2DFA",
                  }}
                >
                  From:$30
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity
          style={{
            top: 30,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#E0DBED",
            borderRadius: 8,
            padding: 10,
            height: 50,
            width: 274,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>
            View Product
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text></Text>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Text style={{ color: "#6E2DFA", fontSize: 20, fontWeight: "700" }}>
            Explore all popular products →
          </Text>
        </TouchableOpacity>
      </View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    width: 304,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E0DBED",

    overflow: "hidden",
    height: 529,
  },
  imageContainer: {
    alignItems: "center",

    padding: 15,
    height: 262,
    borderRadius: 10,

    overflow: "hidden",
  },
  image: {
    width: 274,
    height: 274,
  },
  subComponentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "black",
    lineHeight: 28,
  },
});

export default Screen1;
