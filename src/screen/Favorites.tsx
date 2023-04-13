import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import { useSelector } from "react-redux";
import { Data } from "../models/Data";
import Card from "../components/Card/Card";
import {
  BookmarkProps,
  removeAllBookmark,
  removeBookmark,
} from "../redux/actions/bookmarkActions";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

const Favorites: CustomScreenFC<"Favorite"> = () => {
  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );

  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: "#fc8386",
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      {bookmarks.length > 0 ? (
        <View>
          <TouchableOpacity
            style={{ paddingVertical: 20, alignItems: "flex-end" }}
            activeOpacity={0.4}
            onPress={() => dispatch(removeAllBookmark())}
          >
            <MaterialCommunityIcons name="delete" color="red" size={30} />
          </TouchableOpacity>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              elevation: 2,
              shadowColor: "black",
              shadowOffset: {
                height: 10,
                width: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1,
              marginTop: -20,
            }}
          >
            {bookmarks?.map((item: Data, index: number) => {
              return (
                <Card
                  item={item}
                  index={index}
                  key={index}
                  disabled
                  onPress={() => dispatch(removeBookmark(item.id))}
                />
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "#000000", fontSize: 20 }}>
            No Bookmark present
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
