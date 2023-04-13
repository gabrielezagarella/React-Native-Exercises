import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Data } from "../../models/Data";

interface Props {
  item: Data;
  index: number;
  disabled?: boolean;
  onPress?: () => void;
}
const Card = ({ item, index, disabled, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      key={`key-${index}`}
      onPress={onPress}
      disabled={disabled && !onPress}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <View style={styles.card}>
          <View>
            <Text style={styles.description}>Nome:</Text>
            <Text style={styles.description}>Specie:</Text>
            <Text style={styles.description}>Location:</Text>
          </View>
          <View>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.tail}>
              {item.name}
            </Text>
            <Text style={styles.tail} ellipsizeMode="tail" numberOfLines={1}>
              {item.species}
            </Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.tail}>
              {item.location.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 170,
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 80,
  },
  description: {
    fontWeight: "bold",
    padding: 4,
  },
  tail: {
    padding: 4,
    width: 120,
  },
});

export default Card;
