import React from "react";
import { SafeAreaView, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30 }}>Hello world!</Text>
    </SafeAreaView>
  );
};

export default App;
