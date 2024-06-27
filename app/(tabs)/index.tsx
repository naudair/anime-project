import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { PopularAnime } from "@/components/PopularAnime";
// import { RotateLoader } from "react-spinners";

export type AnimesData = {
  id: string;
  attributes: {
    posterImage: {
      large: string;
    };
    canonicalTitle: string;
    startDate: string;
    episodeCount: number;
    popularityRank: string;
    showType: string;
    status: string;
  };
};

export default function Index() {
  const [data, setData] = useState<AnimesData[]>([]);
  const [genre, setGenre] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{ data: AnimesData[] }>(
          genre
            ? `https://kitsu.io/api/edge/anime?filter[categories]=${genre}`
            : "https://kitsu.io/api/edge/trending/anime"
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [genre]);

  let userContainer = <Text>Hello</Text>;

  // const sortedData = data.reverse((a: AnimesData, b: AnimesData) => {
  //   return (
  //     parseInt(a.attributes.popularityRank) -
  //     parseInt(b.attributes.popularityRank)
  //   );
  // });

  return (
    <View>
      <View style={{ height: 150 }}>
        <Text style={styles.head}>Choose genre</Text>

        <View style={styles.btnContainer}>
          {category.map((index) => (
            <Pressable
              onPress={() => setGenre(index)}
              key={index}
              style={[
                {
                  backgroundColor: index == genre ? "#E45959" : "#3F4042",
                },
                styles.genre,
              ]}
            >
              <Text style={{ color: "#ffffff" }}>{index}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{ height: 350 }}>
        <Text style={styles.head}>Popular</Text>
        {loading ? (
          <ScrollView horizontal={true} style={{ paddingTop: 100 }}>
            {[1, 2, 3, 4].map((item) => (
              // <RotateLoader
              <ActivityIndicator
                size="large"
                key={item}
                color="#E45959"
                style={{ paddingHorizontal: 60, justifyContent: "flex-start" }}
              />
              // <Text >hello</Text>
            ))}
          </ScrollView>
        ) : (
          <ScrollView horizontal={true}>
            {data.map((data) => (
              <PopularAnime key={data.id} data={data} />
            ))}
          </ScrollView>
        )}
      </View>
      <View style={{ height: 350 }}>
        <Text style={styles.head}>For you</Text>
        {loading ? (
          <ScrollView horizontal={true} style={{ paddingTop: 100 }}>
            {[1, 2, 3, 4].map((item) => (
              <ActivityIndicator
                key={item}
                size="large"
                color="#E45959"
                style={{ paddingHorizontal: 60, justifyContent: "flex-start" }}
              />
            ))}
          </ScrollView>
        ) : (
          <ScrollView horizontal={true}>
            {data.map((data) => (
              <PopularAnime key={data.id} data={data} />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
  },
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
  btnContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    paddingTop: 17,
  },
  genre: {
    // backgroundColor: "#3F4042", //#E45959
    width: 110,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    fontWeight: "900",
  },
});

export const category = [
  "Adventure",
  "Action",
  "Horror",
  "Fantasy",
  "Drama",
  "Thriller",
];
