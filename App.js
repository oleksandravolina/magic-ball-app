import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function App() {

  // состояние для ответа шара
  const [answer, setAnswer] = useState("Задай вопрос");

  // список ответов
  const answers = [
    "Да",
    "Нет",
    "Скорее да",
    "Скорее нет",
    "Спроси позже",
    "Определенно",
    "Сомнительно"
  ];

  // функция случайного ответа
  const getAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Магический шар</Text>

      <Image
        source={require("./assets/ball.png")}
        style={styles.ball}
      />

      <Text style={styles.answer}>{answer}</Text>

      <TouchableOpacity style={styles.button} onPress={getAnswer}>
        <Text style={styles.buttonText}>Получить ответ</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0b0b1f",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 40,
  },

  ball: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },

  answer: {
    color: "#9fd3ff",
    fontSize: 22,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#6a00ff",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  }

});
