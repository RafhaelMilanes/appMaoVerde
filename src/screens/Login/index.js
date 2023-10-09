import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Cuide.</Text>
        <Text style={styles.text}>Conserve.</Text>
        <Text style={styles.text}>Renove.</Text>

        <Button
          title="Get Started"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 51)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            height: 72,
            width: 300,
            marginVertical: 400,
            
          }}
          onPress={() => handleNavRegister()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#132815",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 42,
    backgroundColor: "transparent",
    alignItems: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 58,
    fontWeight: "900",
  },
});

export default Login;
