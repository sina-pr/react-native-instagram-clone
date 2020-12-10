import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import {
  Appbar,
  Avatar,
  Badge,
  Card,
  Divider,
  Title,
} from "react-native-paper";
import { DoubleClick } from "react-native-double-tap";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  useFonts({
    Billabong: require("../assets/fonts/Billabong.ttf"),
  });
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  return (
    <SafeAreaView style={{ backgroundColor: "#ffff" }}>
      <View>
        <Appbar.Header style={styles.app_bar}>
          <Appbar.Action icon="camera-outline" onPress={() => {}} />
          <Text style={styles.brand}>Instagram</Text>
          <Appbar.Action icon="television-classic" onPress={() => {}} />
          <Appbar.Action icon="send" onPress={() => {}} />
        </Appbar.Header>
        <ScrollView>
          <View style={styles.avatars_container}>
            <View style={styles.avatars}>
              <Avatar.Image
                style={styles.avatar_image}
                size={50}
                source={require("../assets/Images/Avatar/avatar-2.jpg")}
              />
              <Badge size={13} style={styles.avatar_badge}>
                +
              </Badge>
              <Text style={styles.avatar_title}>Your story</Text>
            </View>
            <View style={styles.avatars}>
              <Avatar.Image
                size={50}
                source={require("../assets/Images/Avatar/avatar-1.jpg")}
              />

              <Text style={styles.avatar_title}>sina007</Text>
            </View>
            <View style={styles.avatars}>
              <Avatar.Image
                size={50}
                source={require("../assets/Images/Avatar/avatar-3.jpg")}
              />
              <Text style={styles.avatar_title}>bJozhajamir</Text>
            </View>
          </View>
          <Divider />
          <View>
            <View>
              <View style={styles.post_header}>
                <Avatar.Image
                  source={require("../assets/Images/Avatar/avatar-3.jpg")}
                  size={32}
                  style={styles.post_avatar}
                />
                <Text style={styles.post_title}>bJozhajamir</Text>
                <Feather name="more-vertical" size={18} color="grey" />
              </View>
              
              <Image
                source={require("../assets/Images/Avatar/avatar-1.jpg")}
                style={styles.post_image}
              />
              <View style={styles.post_footer}>
                <View style={styles.post_footer_icons}>
                  {liked ? (
                    <FontAwesome
                      onPress={() => {
                        setLiked(false);
                        setLikes(likes - 1);
                      }}
                      style={{ marginRight: 10 }}
                      name="heart"
                      size={20}
                      color="black"
                    />
                  ) : (
                    <FontAwesome
                      onPress={() => {
                        setLiked(true);
                        setLikes(likes + 1);
                      }}
                      style={{ marginRight: 10 }}
                      name="heart-o"
                      size={20}
                      color="black"
                    />
                  )}
                  <FontAwesome
                    style={{ marginRight: 10 }}
                    name="comment-o"
                    size={20}
                    color="black"
                  />
                  <FontAwesome
                    style={{ marginRight: 10, flex: 1 }}
                    name="send-o"
                    size={20}
                    color="black"
                  />

                  <Feather name="archive" size={20} color="black" />
                </View>
                <Text style={styles.post_footer_likes}>{likes}</Text>
                <View style={styles.post_footer_text}>
                  <Text style={{ marginRight: 6, fontWeight: "700" }}>
                    bJozhajamir
                  </Text>
                  <Text>
                    Culpa ullamco duis elit nulla esse Lorem consequat laboris
                    non.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.post_header}>
                <Avatar.Image
                  source={require("../assets/Images/Avatar/avatar-3.jpg")}
                  size={32}
                  style={styles.post_avatar}
                />
                <Text style={styles.post_title}>bJozhajamir</Text>
                <Feather name="more-vertical" size={18} color="grey" />
              </View>

              <Image
                source={require("../assets/Images/Avatar/avatar-1.jpg")}
                style={styles.post_image}
              />

              <View style={styles.post_footer}>
                <View style={styles.post_footer_icons}>
                  <FontAwesome
                    style={{ marginRight: 10 }}
                    name="heart-o"
                    size={20}
                    color="black"
                  />
                  <FontAwesome
                    style={{ marginRight: 10 }}
                    name="comment-o"
                    size={20}
                    color="black"
                  />
                  <FontAwesome
                    style={{ marginRight: 10, flex: 1 }}
                    name="send-o"
                    size={20}
                    color="black"
                  />
                  <Feather name="archive" size={18} color="black" />
                </View>
                <Text style={styles.post_footer_likes}>123 likes</Text>
                <View style={styles.post_footer_text}>
                  <Text style={{ marginRight: 6, fontWeight: "700" }}>
                    bJozhajamir
                  </Text>
                  <Text>
                    Culpa ullamco duis elit nulla esse Lorem consequat laboris
                    non.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.post_header}>
                <Avatar.Image
                  source={require("../assets/Images/Avatar/avatar-3.jpg")}
                  size={32}
                  style={styles.post_avatar}
                />
                <Text style={styles.post_title}>bJozhajamir</Text>
                <Feather name="more-vertical" size={18} color="grey" />
              </View>
              <Image
                source={require("../assets/Images/Avatar/avatar-1.jpg")}
                style={styles.post_image}
              />
              <View style={styles.post_footer}>
                <View style={styles.post_footer_icons}>
                  <FontAwesome
                    style={{ marginRight: 10 }}
                    name="heart-o"
                    size={20}
                    color="black"
                  />
                  <FontAwesome
                    style={{ marginRight: 10 }}
                    name="comment-o"
                    size={20}
                    color="black"
                  />
                  <FontAwesome
                    style={{ marginRight: 10, flex: 1 }}
                    name="send-o"
                    size={20}
                    color="black"
                    on
                  />
                  <Feather name="archive" size={18} color="black" />
                </View>
                <Text style={styles.post_footer_likes}>123 likes</Text>
                <View style={styles.post_footer_text}>
                  <Text style={{ marginRight: 6, fontWeight: "700" }}>
                    bJozhajamir
                  </Text>
                  <Text>
                    Culpa ullamco duis elit nulla esse Lorem consequat laboris
                    non.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  app_bar: {
    backgroundColor: "#ffff",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 0,
    paddingTop: 0,
  },
  brand: {
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 15,
    flex: 1,
    fontFamily: "Billabong",
  },
  avatars_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  avatars: {
    display: "flex",
    margin: 10,
    marginRight: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar_title: {
    fontSize: 12,
    fontWeight: "500",
  },
  avatar_badge: {
    position: "absolute",
    bottom: 15,
    right: 4,
    fontSize: 12,
  },
  post_header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  post_avatar: {
    margin: 10,
  },
  post_title: {
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
  },
  post_image: {
    width: "100%",
    height: 300,
  },
  post_footer: {
    display: "flex",
    flexDirection: "column",
  },
  post_footer_icons: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
    alignItems: "center",
  },
  post_footer_likes: {
    marginLeft: 8,
    fontWeight: "700",
    fontSize: 12,
  },
  post_footer_text: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 8,
  },
});
