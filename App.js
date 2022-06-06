import { useState } from "react";

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessedRounds, setGuessedRounds] = useState(0);
  const [fontsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const newGameHandler = () => {
    console.log("new");
    setUserNumber(null);
    setGuessedRounds(0);
  };

  if (!fontsLoading) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen choseNumber={pickedNumberHandler} />;

  const gameOverHandler = (rounds) => {
    setGameOver(true);
    setGuessedRounds(rounds);
  };

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessedRounds}
        userNumber={userNumber}
        onStartNewGame={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.screen}
      colors={[Colors.primary800, Colors.secondary]}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpeg")}
        style={styles.screen}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
