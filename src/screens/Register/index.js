import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@rneui/themed";

const Home = () => {
  const navigation = useNavigation();

  const handleNavRegister = () => {
    navigation.navigate("Home");
  };

  const handNewUser = () => {
    navigation.navigate("New");
  };

  return (
    <ImageBackground
      source={require("../../../assets/Backgrund.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Input
          containerStyle={{ width: "85%", marginTop: 220 }}
          style={{ color: "white" }}
          placeholder="E-mail"
        />

        <Input
          containerStyle={{ width: "85%" }}
          style={{ color: "white" }}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <Button
          title="Login"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 51)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 15,
            height: 72,
            width: 300,
          }}
          onPress={() => handleNavRegister()}
        />
        <Button
          title="Cadastrar"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(25, 144, 51, 51)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 15,
            height: 72,
            width: 300,
          }}
          onPress={() => handNewUser()}
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
