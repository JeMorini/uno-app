import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";

export default function App() {
  const [cardsPlayer, setCardsPlayer] = useState();
  const [currentCard, setCurrentCard] = useState();
  const [playerNumber, setPlayerNumber] = useState();
  initializeApp({
    apiKey: "AIzaSyCYA0pyPJNH7Knc4-1-pSXqzxhrAW_btLE",
    authDomain: "unodb-dad4e.firebaseapp.com",
    projectId: "unodb-dad4e",
    storageBucket: "unodb-dad4e.appspot.com",
    messagingSenderId: "260132756646",
    appId: "1:260132756646:web:95007b3801f57f687ce867",
    measurementId: "G-78JQGGFBS3",
  });

  const db = getFirestore();

  useEffect(() => {
    try {
      onSnapshot(doc(db, "uno", "cards"), (doc) => {
        if (playerNumber === "1") {
          setCardsPlayer(doc.data().playerOne);
        }
        if (playerNumber === "2") {
          setCardsPlayer(doc.data().playerTwo);
        }
        setCurrentCard(doc.data().currentCard);
      });
    } catch (err) {
      alert(err);
    }
  }, [db, playerNumber]);

  async function playCard(prop, index) {
    if (
      (currentCard.number === prop.number ||
        currentCard.color === prop.color) &&
      currentCard.last !== playerNumber
    ) {
      cardsPlayer.splice(index, 1);
      await updateDoc(doc(db, "uno", "cards"), {
        currentCard: {
          number: prop.number,
          color: prop.color,
          last: playerNumber,
        },
        playerOne: cardsPlayer,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cardsPlayer &&
          cardsPlayer.map((item, index) => (
            <TouchableOpacity
              onPress={() => playCard(item, index)}
              style={{
                backgroundColor: item.color,
                height: 300,
                width: 200,
                alignItems: "center",
                justifyContent: "center",
                transform: [{ rotate: "90deg" }],
              }}
            >
              <Text
                style={{
                  color: item.color === "yellow" ? "#000" : "#fff",
                  fontSize: 50,
                }}
              >
                {item.number}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      {/* <Text
        style={{
          transform: [{ rotate: "90deg" }],
        }}
      >
        NÚMERO DE CARTAS {cardsPlayer?.length}
      </Text> */}
      <TextInput
        style={{
          height: 100,
          width: 100,
          fontSize: 30,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 10,
          transform: [{ rotate: "90deg" }],
          borderColor: "#000",
          borderWidth: 2,
        }}
        onChangeText={(item) => {
          setPlayerNumber(item), Keyboard.dismiss();
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
