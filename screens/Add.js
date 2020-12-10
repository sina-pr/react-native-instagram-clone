import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
const AddScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#ffff",
      }}
    >
      <MaterialIcons
        style={{ margin: 30, marginBottom: 60 }}
        name="build"
        size={94}
        color="black"
      />
      <Text style={{ fontSize: 30, fontFamily: "sans-serif" }}>
        I'm working on It :)
      </Text>
    </SafeAreaView>
  );
};

export default AddScreen;
