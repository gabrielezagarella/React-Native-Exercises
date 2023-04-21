type RootStackParams = {
  Home: { typology: string };
  Detail: {
    id?: string | undefined;
    name?: string | undefined;
  };
  HomeStack: undefined;
  Profile: undefined;
  Favorite: {
    love: boolean,
    bookmark: number
  };
  Setting: {setting: string};
  Homepage: undefined;
  SignUp: undefined;
  Login: undefined;
};

export default RootStackParams;
