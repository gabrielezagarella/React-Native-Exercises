import React from 'react'
import { Text } from 'react-native';

const Title = () => {
  console.log("Rendering Title");
  
  return (
    <Text>Title useCallback Hook</Text>
  )
}

export default React.memo(Title);