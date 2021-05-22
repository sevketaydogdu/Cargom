import React from "react";
import { TouchableOpacity } from "react-native";

import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import COLORS from "../constans/colors";
=======

import COLORS  from '../components/colors';
>>>>>>> e7e32b9fc83a651bc94fd3d18611db442d069c31

const SplashhScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/splashh.png")}
      resizeMode="cover"
      style={styles.img}
    >
      <View style={styles.btnContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={styles.btnKayit}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.txt}>Kayıt Ol</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnGiris}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.txt}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashhScreen;

const styles = StyleSheet.create({
  btnKayit: {
    backgroundColor: COLORS.primary,
<<<<<<< HEAD
=======
    // backgroundColor: "#41D5FB",
>>>>>>> e7e32b9fc83a651bc94fd3d18611db442d069c31
    width: "35%",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnGiris: {
    padding: 10,
    width: "35%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  txt: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  btnContainer: {
    bottom: 70,
    position: "absolute",
    width: "100%",
  },
  img: { width: "100%", height: "100%" },
});
