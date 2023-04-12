import React from "react";
import { Button } from "react-native";

interface Props {
  handleClick: () => void;
  title: string;
}

const CustomButton: React.FC<Props> = ({ title, handleClick }) => {
  console.log("CustomButton", title);

  return <Button title={title} onPress={handleClick} />;
};

export default React.memo(CustomButton);
