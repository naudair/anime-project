import { Image, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";

export const PopularAnime = ({ data }: { data: any }) => {
  return (
    <View style={styles.animeContainer}>
      <Image
        source={{ uri: data.attributes.posterImage.large }}
        style={styles.image}
      />
      <Text style={styles.title}>{data.attributes.canonicalTitle}</Text>
      <View>
        <Text style={styles.dateEp}>
          {dayjs(data.attributes.startDate).format("YYYY")} |{" "}
          {data.attributes.episodeCount} Episodes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    width: 160,
    paddingTop: 5,
    // backgroundColor:"red"
  },
  dateEp: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
  },
  animeContainer: {
    alignItems: "center",
    width: 140,
    marginTop: 24,
    marginRight: 30,
    // borderColor: "#ffffff",
    // borderWidth: 1,
  },
  image: {
    backgroundColor: "#6bc0e8",
    width: 140,
    height: 194,
    borderRadius: 20,
  },
});
