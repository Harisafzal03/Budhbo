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
  TouchableWithoutFeedback,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Grand Daddy Purple",
    image: require("../assets/mui.png"),
    subComponents: [{ id: "a", text: "View Product" }],
  },
  {
    id: "2",
    title: "Card 2",
    image: require("../assets/mui.png"),
    subComponents: [{ id: "c", text: "View Product" }],
  },
  // Add more cards as needed
];
interface CardProps {
  title: string;
  image: ImageSourcePropType;
  subComponents: { id: string; text: string }[];
}
const Card: React.FC<CardProps> = ({ title, image, subComponents }) => (
  <View
    style={{
      width: 304,
      height: 378,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: "#E0DBED",
      borderRadius: 16,
      backgroundColor: "#fff",
    }}
  >
    <View
      style={{
        width: 293,
        height: 223,
        top: 23,
        left: 14,
        borderWidth: 0,
        borderRadius: 8,
      }}
    >
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{
          width: 256,
          paddingLeft: 8,
          paddingTop: 2,
        }}
      >
        <TouchableOpacity
          style={{
            width: 60,
            height: 24,
            paddingHorizontal: 8,
            paddingVertical: 2,
            backgroundColor: "#FFF5EC",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "700", color: "#FF9644" }}>
            HYBRID
          </Text>
        </TouchableOpacity>
        <View style={{ width: 20 }}></View>
        <TouchableOpacity
          style={{
            height: 24,

            paddingHorizontal: 8,
            paddingVertical: 2,
            borderWidth: 1,
            backgroundColor: "#FFF",
            borderColor: "#E0DBED",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 12,
              color: "#736B8E",
            }}
          >
            THC:20%
          </Text>
        </TouchableOpacity>
        <View style={{ width: 10 }}></View>
        <TouchableOpacity
          style={{
            height: 24,
            width: 70,

            paddingHorizontal: 8,
            paddingVertical: 2,
            borderWidth: 1,
            backgroundColor: "#FFF",
            borderColor: "#E0DBED",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 12,
              color: "#736B8E",
            }}
          >
            CBD:9%
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 54,
            height: 24,
            left: 24,
            flexGrow: 1,
            right: 8,
            top: 2,
            bottom: 2,
            borderWidth: 0,
            backgroundColor: "#FFF",
          }}
        ></TouchableOpacity>
      </ScrollView>
      <View style={{ paddingLeft: 8, flexDirection: "row" }}>
        <Image
          style={{ height: 80, width: 80, borderRadius: 8 }}
          source={image}
        />
        <View style={{ paddingLeft: 8 }}>
          <Text
            style={{
              fontSize: 18,
              color: "black",
              fontWeight: "700",
            }}
          >
            Platinum Haze
          </Text>
          <ScrollView horizontal style={{}}>
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
                }}
              >
                Flower
              </Text>
              <Text
                style={{
                  paddingLeft: 8,
                  fontSize: 12,
                  fontWeight: "700",
                  color: "#736B8E",
                }}
              >
                BY:PURE SUNFARMS
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity>
            <Text
              style={{
                width: 75,
                height: 20,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#E0DBED",
                backgroundColor: "#E0DBED",
                bottom: 15,
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
      </View>
      <Text
        style={{
          bottom: 0,
          paddingLeft: 8,
          fontWeight: "700",
          fontSize: 12,
          color: "#000000",
        }}
      >
        DEAL AVAILABLE AT:
      </Text>
      <View style={{ paddingLeft: 8, flexDirection: "row" }}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../assets/Avatar.png")}
        />
        <View>
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 20,
              fontWeight: "700",
              color: "#000000",
            }}
          >
            Native Roots
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 8,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>✔ Pick-up</Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", paddingHorizontal: 5 }}
            >
              ✔ Delivery
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", color: "#6E2DFA" }}
            >
              ➔ $1.7 MIL
            </Text>
          </View>
        </View>
      </View>
    </View>
    <ScrollView
      horizontal
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      showsHorizontalScrollIndicator={false}
      style={{ top: 30, paddingLeft: 20 }}
    >
      <View
        style={{
          borderWidth: 1,
          width: 156,
          height: 50,
          borderColor: "#E0DBED",
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 8,
        }}
      >
        <View>
          <Text>1/8 oz</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontWeight: "600",
                fontSize: 14,
                color: "#000",
              }}
            >
              $35.00
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 14,
                color: "#6E2DFA",
              }}
            >
              $30.00
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{ height: 40, width: 40, left: 100, bottom: 35 }}
            source={require("../assets/xy.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: 10 }}></View>
      <View
        style={{
          borderWidth: 1,
          width: 156,
          height: 50,
          borderColor: "#E0DBED",
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 8,
          flexDirection: "row",
        }}
      >
        <View>
          <Text>1/8 oz</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontWeight: "600",
                fontSize: 14,
                color: "#000",
              }}
            >
              $35.00
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 14,
                color: "#6E2DFA",
              }}
            >
              $30.00
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={{ height: 40, width: 40, left: 100, bottom: 35 }}
            source={require("../assets/xy.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: 50 }}></View>
    </ScrollView>
    <TouchableOpacity
      style={{
        alignContent: "center",
        backgroundColor: "#fff",
        borderColor: "#E0DBED",
        borderWidth: 1,
        borderRadius: 8,
        width: 256,
        height: 50,
        left: 24,
        paddingHorizontal: 24,
        paddingVertical: 11,
        bottom: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#736B8E",
        }}
      >
        View Deal
      </Text>
    </TouchableOpacity>
  </View>
);

const Muimaterial = () => {
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

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text></Text>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity>
          <Text style={{ color: "#6E2DFA", fontSize: 20, fontWeight: "700" }}>
            Explore all local deals →
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
    width: 304,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
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
    width: "102%",
  },
  subComponentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
});

export default Muimaterial;
