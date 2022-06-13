import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import Card from "./src/Components/Card";
import AskCardButton from "./src/Components/AskCardButton";
import Perfil from "./src/Components/Perfil";

const App: React.FC = () => {
  const cards = [
    { number: 1, color: "#DB3C28" },
    { number: 2, color: "#DB3C28" },
    { number: 3, color: "#DB3C28" },
    { number: 4, color: "#DB3C28" },
    { number: 5, color: "#DB3C28" },
    { number: 6, color: "#DB3C28" },
    { number: 7, color: "#DB3C28" },
    { number: 8, color: "#DB3C28" },
    { number: 9, color: "#DB3C28" },
    { number: 1, color: "#1275BA" },
    { number: 2, color: "#1275BA" },
    { number: 3, color: "#1275BA" },
    { number: 4, color: "#1275BA" },
    { number: 5, color: "#1275BA" },
    { number: 6, color: "#1275BA" },
    { number: 7, color: "#1275BA" },
    { number: 8, color: "#1275BA" },
    { number: 9, color: "#1275BA" },
    { number: 1, color: "#8BBD44" },
    { number: 2, color: "#8BBD44" },
    { number: 3, color: "#8BBD44" },
    { number: 4, color: "#8BBD44" },
    { number: 5, color: "#8BBD44" },
    { number: 6, color: "#8BBD44" },
    { number: 7, color: "#8BBD44" },
    { number: 8, color: "#8BBD44" },
    { number: 9, color: "#8BBD44" },
    { number: 1, color: "#F5D93D" },
    { number: 2, color: "#F5D93D" },
    { number: 3, color: "#F5D93D" },
    { number: 4, color: "#F5D93D" },
    { number: 5, color: "#F5D93D" },
    { number: 6, color: "#F5D93D" },
    { number: 7, color: "#F5D93D" },
    { number: 8, color: "#F5D93D" },
    { number: 9, color: "#F5D93D" },
  ];
  const [cardsPlayer, setCardsPlayer] = useState<any>([]);
  const [currentCard, setCurrentCard] = useState<any>();
  const [playerNumber, setPlayerNumber] = useState("");
  const [playerSkin, setPlayerSkin] = useState("");
  const [lastAsk, setLastAsk] = useState("");
  // const [orderBy, setOrderBy] = useState("number");
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedSkin, setSelectedSkin] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");

  initializeApp({
    //FIIREBASE-CONFIGS
  });

  const db = getFirestore();
  const q = query(doc(db, "uno", "cards"));

  useEffect(() => {
    try {
      onSnapshot(q, (doc: any) => {
        if (playerNumber === "1") {
          setCardsPlayer(doc.data().playerOne);
          setPlayerSkin(doc.data().playerOneSkin);
        }
        if (playerNumber === "2") {
          setCardsPlayer(doc.data().playerTwo);
          setPlayerSkin(doc.data().playerTwoSkin);
        }
        setCurrentCard(doc.data().currentCard);
        setLastAsk(doc.data().lastAsk);
        setCurrentPlayer(doc.data().currentPlayer);
      });
    } catch (err) {
      alert(err);
    }
  }, [db, playerNumber]);

  async function askCard(prop) {
    if (prop === "1" && lastAsk !== "1" && currentPlayer === "1") {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      cardsPlayer.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      await updateDoc(doc(db, "uno", "cards"), {
        playerOne: cardsPlayer,
        lastAsk: "1",
      });
    }

    if (prop === "2" && lastAsk !== "2" && currentPlayer === "2") {
      const randomNumber = (Math.random() * (35 - 0) + 0).toFixed(0);
      cardsPlayer.push({
        number: cards[Number(randomNumber)].number,
        color: cards[Number(randomNumber)].color,
      });
      await updateDoc(doc(db, "uno", "cards"), {
        playerTwo: cardsPlayer,
        lastAsk: "2",
      });
    }
    setLastAsk(prop);
  }

  async function pass() {
    if (playerNumber === "1" && currentPlayer === "1" && lastAsk === "1") {
      await updateDoc(doc(db, "uno", "cards"), {
        currentCard: {
          number: currentCard.number,
          color: currentCard.color,
          last: "1",
        },
        currentPlayer: "2",
      });
    }

    if (playerNumber === "2" && currentPlayer === "2" && lastAsk === "2") {
      await updateDoc(doc(db, "uno", "cards"), {
        currentCard: {
          number: currentCard.number,
          color: currentCard.color,
          last: "2",
        },
        currentPlayer: "1",
      });
    }
  }

  async function selectSkin() {
    try {
      if (playerNumber === "1") {
        await updateDoc(doc(db, "uno", "cards"), {
          playerOneSkin: selectedSkin,
        });
      }
      if (playerNumber === "2") {
        await updateDoc(doc(db, "uno", "cards"), {
          playerTwoSkin: selectedSkin,
        });
      }
    } catch (err) {
      alert(err);
    }
  }

  async function playCard(prop, index) {
    if (
      (currentCard?.number === prop.number ||
        currentCard?.color === prop.color) &&
      currentPlayer === playerNumber
    ) {
      // if (orderBy === "color") {
      //   cardsPlayer.sort(function (a, b) {
      //     if (a.color > b.color) {
      //       return 1;
      //     }
      //     if (a.color < b.color) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      // }
      // if (orderBy === "number") {
      //   cardsPlayer.sort(function (a, b) {
      //     if (a.number > b.number) {
      //       return 1;
      //     }
      //     if (a.number < b.number) {
      //       return -1;
      //     }
      //     return 0;
      //   });
      // }
      try {
        cardsPlayer.splice(index, 1);
        if (playerNumber === "1") {
          await updateDoc(doc(db, "uno", "cards"), {
            currentCard: {
              number: prop.number,
              color: prop.color,
              last: "1",
            },
            playerOne: cardsPlayer,
            lastAsk: "1",
            currentPlayer: "2",
          });
        }
        if (playerNumber === "2") {
          await updateDoc(doc(db, "uno", "cards"), {
            currentCard: {
              number: prop.number,
              color: prop.color,
              last: "2",
            },
            playerTwo: cardsPlayer,
            lastAsk: "2",
            currentPlayer: "1",
          });
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  // useEffect(() => {
  //   if (orderBy === "color") {
  //     cardsPlayer.sort(function (a, b) {
  //       if (a.color > b.color) {
  //         return 1;
  //       }
  //       if (a.color < b.color) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   }
  //   if (orderBy === "number") {
  //     cardsPlayer.sort(function (a, b) {
  //       if (a.number > b.number) {
  //         return 1;
  //       }
  //       if (a.number < b.number) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   }
  // }, [orderBy]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cardsPlayer &&
          cardsPlayer.map((item: {color: string, number: string}, index) => (
            <Card
              color={item.color}
              number={item.number}
              playCard={() => playCard(item, index)}
              skin={playerSkin}
            />
          ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          height: 1000,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text>Qual jogador você é?</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: playerNumber === "1" ? "#15212a" : "#092b5a",
                height: 50,
                width: 100,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setPlayerNumber("1")}
            >
              <Text style={{ color: "#fff" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: playerNumber === "2" ? "#15212a" : "#092b5a",
                height: 50,
                width: 100,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setPlayerNumber("2")}
            >
              <Text style={{ color: "#fff" }}>2</Text>
            </TouchableOpacity>
          </View>
          <Text>Qual sua skin?</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectedSkin === "default" ? "#15212a" : "#092b5a",
                height: 50,
                width: 100,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedSkin("default")}
            >
              <Text style={{ color: "#fff" }}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectedSkin === "minimalist" ? "#15212a" : "#092b5a",
                height: 50,
                width: 100,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedSkin("minimalist")}
            >
              <Text style={{ color: "#fff" }}>Minimalista</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#092b5a",
              height: 50,
              width: 100,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              selectSkin();
              setModalVisible(false);
            }}
          >
            <Text style={{ color: "#fff" }}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
          width: "30%",
        }}
      >
        <Perfil playerNumber={playerNumber} />
        {/* <OrderBy orderBy={orderBy} /> */}
        <AskCardButton
          askCard={() => askCard(playerNumber)}
          title="Pedir carta"
        />
        <AskCardButton askCard={pass} title="Passar vez" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#B21308",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default App
