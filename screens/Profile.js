import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Appbar, Avatar, Button, Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Appbar.Header style={{ backgroundColor: "#ffff" }}>
        <Text style={styles.profile_logo}>ultr4Ping</Text>
        <AntDesign
          style={{ margin: 5 }}
          name="reload1"
          size={24}
          color="black"
        />
        <AntDesign
          style={{ margin: 5 }}
          name="setting"
          size={24}
          color="black"
        />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.Header_container}>
          <View>
            <Avatar.Image
              source={require("../assets/Images/Avatar/avatar-2.jpg")}
              size={95}
            />
          </View>
          <View style={styles.followers_edit_container}>
            <View style={styles.followers_container}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Text style={{ fontWeight: "700" }}>0</Text>
                <Text>Posts</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Text style={{ fontWeight: "700" }}>0</Text>
                <Text>Followers</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "15",
                }}
              >
                <Text style={{ fontWeight: "700" }}>0</Text>
                <Text>Following</Text>
              </View>
            </View>

            <Button
              mode="contained"
              color="#ffff"
              uppercase={false}
              style={styles.edit_profile_btn}
            >
              Edit Profile
            </Button>
          </View>
        </View>
        <View style={styles.bio_container}>
          <Text>
            Adipisicing ex amet ad minim nulla duis incididunt do do aliquip
            proident occaecat amet incididunt.
          </Text>
        </View>
        <Divider />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profile_logo: {
    fontWeight: "700",
    fontSIze: 18,
    flex: 1,
  },
  container: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
  },
  Header_container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  followers_edit_container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  followers_container: {
    display: "flex",
    flexDirection: "row",
  },
  edit_profile_btn: {
    marginTop: 10,
    paddingRight: 35,
    paddingLeft: 35,
    paddingTOp: 0,
  },
  bio_container: {
    margin: 10,
    fontFamily: "sans-serif",
  },
});

export default ProfileScreen;
