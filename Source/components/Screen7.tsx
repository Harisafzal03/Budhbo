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
  TextInput,
  Button,
} from "react-native";

const Screen7 = () => {
  return (
    <View style={{ backgroundColor: "#fff", borderTopLeftRadius: 48 }}>
      <Text></Text>
      <Text></Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 108 }}
      >
        <Image
          style={{ height: 57, width: 57 }}
          source={require("../assets/ab.png")}
        />
        <View>
          <Image
            style={{ height: 33.65, width: 80.09, top: 10 }}
            source={require("../assets/Screen7.png")}
          />
        </View>
      </ScrollView>
      <Text></Text>
      <ScrollView
        horizontal
        style={{
          height: 48,
          width: 360,
          borderWidth: 1,
          borderColor: "#E0DBED",
          left: 25,
        }}
      >
        <Image
          style={{ height: 31, width: 31, top: 10, left: 10 }}
          source={require("../assets/Screen7logo.png")}
        />
        <View style={{ width: 10 }}></View>
        <Image
          style={{ height: 24, width: 277.19, top: 10, left: 10 }}
          source={require("../assets/Screen7logo1.png")}
        />
      </ScrollView>
      <Text></Text>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Get plugged with Budbo!
        </Text>
      </View>
      <Text></Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: 50 }}
      >
        <TouchableOpacity>
          <Image
            style={{ height: 48, width: 144 }}
            source={require("../assets/Screen7(1).png")}
          />
        </TouchableOpacity>
        <View style={{ width: 25 }}></View>
        <TouchableOpacity>
          <Image
            style={{ height: 48, width: 140, borderRadius: 5 }}
            source={require("../assets/Screen7(2).png")}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
          }}
        ></Text>
      </View>
      <Text></Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ left: 30 }}
      >
        <View style={{ width: 159, height: 140, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
              About
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              Company
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                paddingVertical: 10,
                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              Careers
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 30 }}></View>
        <View style={{ width: 159, height: 140, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
              Support
            </Text>
          </TouchableOpacity>
          <Text></Text>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,

                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              FAQ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                paddingVertical: 10,
                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              Help Center
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              Support
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text></Text>
      <Text></Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ left: 30 }}
      >
        <View style={{ width: 159, height: 140, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
              Budbo Token
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              Exchanges
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                paddingVertical: 10,
                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              Coinmarketcap
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              CoinGecko
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 30 }}></View>
        <View style={{ width: 159, height: 172, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
              Buisness
            </Text>
          </TouchableOpacity>
          <Text></Text>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,

                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              Add your Buisness
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                paddingVertical: 10,
                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              E-Commerce
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#736B8E" }}>
              Fleet Tracking
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                paddingTop: 10,
                fontWeight: "500",
                color: "#736B8E",
              }}
            >
              Blockchain
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
          }}
        ></Text>
      </View>
      <Text></Text>
      <View style={{ paddingLeft: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
          Subscribe to the free NewsLetter
        </Text>
        <Text></Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",

            color: "#736B8E",
          }}
        >
          Sign up and get 20% discount on your first order.
        </Text>
        <Text></Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 12 }}
        >
          <TextInput
            style={{
              textAlign: "center",
              width: 229,
              height: 48,
              borderRadius: 10,
              borderWidth: 1,
              fontSize: 16,
              fontWeight: "700",
            }}
            keyboardType="email-address"
            placeholder="Your Email Address"
          />
          <View style={{ width: 20 }}></View>
          <TouchableOpacity>
            <View
              style={{
                width: 106,
                height: 48,
                borderRadius: 8,
                backgroundColor: "#6E2DFA",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  top: 15,
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Text></Text>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ left: 120 }}
      >
        <TouchableOpacity>
          <Image
            style={{ height: 32, width: 32 }}
            source={require("../assets/Screen7(3).png")}
          />
        </TouchableOpacity>
        <View style={{ width: 10 }}></View>
        <TouchableOpacity>
          <Image
            style={{ height: 32, width: 32 }}
            source={require("../assets/Screen7(4).png")}
          />
        </TouchableOpacity>
        <View style={{ width: 10 }}></View>
        <TouchableOpacity>
          <Image
            style={{ height: 32, width: 32 }}
            source={require("../assets/Screen7(5).png")}
          />
        </TouchableOpacity>
        <View style={{ width: 10 }}></View>
        <TouchableOpacity>
          <Image
            style={{ height: 32, width: 32 }}
            source={require("../assets/Screen7(6).png")}
          />
        </TouchableOpacity>
      </ScrollView>
      <Text></Text>
      <Text
        style={{
          color: "black",
          fontSize: 16,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        380 W 62nd Ave, Denver, CO
      </Text>
      <Text></Text>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text
          style={{
            width: 126,
            height: 24,
            borderColor: "#E0DBED",
            borderRadius: 8,
            textAlign: "center",
            borderWidth: 1,
            color: "#736B8E",
            fontWeight: "700",
          }}
        >
          Change Location
        </Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text
          style={{
            borderColor: "#E0DBED",
            borderRadius: 1,
            textAlign: "center",
            color: "#736B8E",
            fontWeight: "700",
          }}
        >
          Terms and Conditions
        </Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#736B8E",
            fontWeight: "700",
          }}
        >
          Privacy Policy
        </Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#736B8E",
            fontWeight: "700",
          }}
        >
          Cookie Policy
        </Text>
      </TouchableOpacity>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
          }}
        ></Text>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 70 }}
      >
        <Image source={require("../assets/Screen7(7).png")} />
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            color: "black",
            top: 24,
            left: 1,
          }}
        >
          © 2023
        </Text>
      </ScrollView>
      <Text></Text>
    </View>
  );
};

export default Screen7;
