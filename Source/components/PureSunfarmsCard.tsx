import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
const DATA = [
  {
    id: "1",
    title: "Grand Daddy Purple",
    image: require("../assets/Content.png"),
    subComponents: [{ id: "a", text: "View Product" }],
  },
  {
    id: "2",
    title: "Card 2",
    image: require("../assets/Content.png"),
    subComponents: [{ id: "c", text: "View Product" }],
  },
  // Add more cards as needed
];
interface CardProps {
  title: string;
  image: ImageSourcePropType;
  subComponents: { id: string; text: string }[];
}

const PureSunfarmsCard = () => {
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
      <ImageBackground
        source={require("../assets/sunfarm.png")}
        style={styles.logo}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("../assets/heart3.png")}
            style={{
              tintColor: isLiked ? "#6E2DFA" : "#E0DBED",
              borderRadius: 60,

              alignSelf: "flex-end",
              top: 33,
              right: 33.5,
              height: 30,
              width: 30,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ padding: 10 }}
      >
        <Image
          style={{ height: 70, width: 70 }}
          source={require("../assets/sunfarmavatar.png")}
        />
        <View>
          <Text
            style={{
              paddingLeft: 20,
              top: 10,
              fontSize: 20,
              fontWeight: "700",
              color: "#000000",
            }}
          >
            Pure Sunfarms
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              top: 10,
              fontSize: 14,
              color: "#6E2DFA",
              fontWeight: "700",
            }}
          >
            4.2 ★★★★☆ (127)
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          paddingLeft: 10,
          color: "#000",
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        Flower✶Concentrations✶Clones
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          color: "#736B8E",
          fontWeight: "700",
          fontSize: 12,
        }}
      >
        120 Products • 50 Locations
      </Text>
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
        style={{ marginHorizontal: 10 }}
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
          <ScrollView horizontal style={{ padding: 5 }}>
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
          </ScrollView>
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
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
            showsHorizontalScrollIndicator={false}
            style={{ padding: 5 }}
          >
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
          </ScrollView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#000",
            fontFamily: "Gilroy-Light",
          }}
        >
          Popular Brands Near You
        </Text>
        <Text></Text>
      </View>
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
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#E0DBED",
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    width: 304,
    height: 468,
  },
  logo: {
    width: 303,
    height: 240,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: "#FFC107",
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 14,
    color: "#888",
  },
  category: {
    fontSize: 16,
    color: "#888",
    alignSelf: "center",
    marginBottom: 10,
  },
  productCount: {
    fontSize: 14,
    color: "#888",
    alignSelf: "center",
    marginBottom: 10,
  },
  availableAtContainer: {
    marginTop: 10,
  },
  availableAt: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
});

export default PureSunfarmsCard;
