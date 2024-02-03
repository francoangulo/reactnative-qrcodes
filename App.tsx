import React from "react";
import { SafeAreaView, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import logo from "./kisspng-paw-dog-computer-icons-5aed1ffdb797a2.054397131525489661752.png";

const App = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30, marginBottom: 50 }}>QR CODES!</Text>
      <QRCode
        value="QR CODE FOR PETS"
        size={200}
        backgroundColor="orange"
        color="purple"
        logo={logo}
        logoSize={100}
      />
    </SafeAreaView>
  );
};

export default App;
