import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const ExploreScreen = () => {
  const [deviceWidth, setDeviseWidth] = useState(360);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const randNumb = Math.round(Math.random() * 50);
    setDeviseWidth(Dimensions.get("window").width);
    Axios.get(
      `https://picsum.photos/v2/list?limit=15&page=${randNumb}`
    ).then((res) => setImageList(res.data));
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#ffff" }}>
      <Appbar.Header style={styles.app_bar}>
        <View style={styles.app_bar_search_container}>
          <Appbar.Action icon="magnify" color="black" />
          <Text style={styles.app_bar_search_text}>Search</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.app_bar_tags_container}>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              IGTV
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Travel
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Architecture
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Decor
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Music
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Art
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Food
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              Style
            </Button>
            <Button
              style={styles.app_bar_btn}
              color="white"
              mode="contained"
              uppercase={false}
            >
              DIY
            </Button>
          </View>
        </ScrollView>
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.explore_images_container}>
          {imageList.map((i) => {
            return (
              <Image
                key={i.id}
                style={{
                  width: deviceWidth / 3,
                  height: deviceWidth / 3,
                  borderColor: "white",
                  borderWidth: 1,
                }}
                resizeMode="cover"
                source={{ uri: i.download_url }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app_bar: {
    alignItems: "flex-start",
    height: 100,
    marginTop: 0,
    flexDirection: "column",
    backgroundColor: "#ffff",
  },
  app_bar_search_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  app_bar_search_text: {
    fontSize: 18,
    color: "grey",
    flex: 1,
  },

  app_bar_tags_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  app_bar_btn: {
    margin: 5,
    padding: 0,
  },
  explore_images_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ExploreScreen;
