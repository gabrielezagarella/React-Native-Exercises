import React from "react";
import { Text } from "react-native";

interface Props {
  text: string;
  count: number;
}

const Count: React.FC<Props> = ({ text, count }) => {
  console.log(`Rendering ${text}`);

  return (
    <Text>
      {text} - {count}
    </Text>
  );
};

export default React.memo(Count);
