import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
  ScrollView,
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

const NativeRootsCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const onPress = () => {
    setIsLiked(!isLiked);
  };
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
  const Card: React.FC<CardProps> = ({ title, image, subComponents }) => (
    <View style={styles.card}>
      <ImageBackground
        source={require("../assets/root.png")}
        style={styles.logo}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require("../assets/heart3.png")}
            style={{
              tintColor: isLiked ? "#6E2DFA" : "#E0DBED",
              borderRadius: 60,

              alignSelf: "flex-end",
              top: 36,
              right: 35,
              height: 22,
              width: 25,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ paddingLeft: 20 }}
      >
        <Image
          style={{ height: 70, width: 70 }}
          source={require("../assets/Avatar.png")}
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
            Native Roots
          </Text>
          <Text
            style={{ paddingLeft: 20, top: 10, fontSize: 14, color: "#6E2DFA" }}
          >
            4.2 ★★★★☆ (127)
          </Text>
        </View>
      </ScrollView>
      <Text style={styles.address}>500 Grant St Denver, CO 39945</Text>
      <Text style={styles.hours}>Open - Until 8:30pm</Text>
      <View style={styles.pickupDeliveryContainer}>
        <Text style={styles.pickupDelivery}>✓ Pick-up</Text>
        <Text style={styles.pickupDelivery}>✔ Delivery</Text>
        <Text style={styles.pickupDelivery}>→ $1.7 MIL</Text>
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
            Explore all local retailers →
          </Text>
        </TouchableOpacity>
      </View>
      <Text></Text>
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
    borderRadius: 24,
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    width: 304,
    height: 410,
    borderColor: "#E0DBED",
  },
  logo: {
    width: 303,
    height: 240,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f1c40f",
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 14,
    color: "#999",
  },
  address: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    paddingLeft: 20,
  },
  hours: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    paddingLeft: 20,
  },
  pickupDeliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  pickupDelivery: {
    fontSize: 14,
    color: "#333",
    marginRight: 10,
  },
  deliveryFee: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
});

export default NativeRootsCard;
