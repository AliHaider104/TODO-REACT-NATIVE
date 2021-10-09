import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";

//* Components
import Task from "./components/Task.js";

export default function App() {
  const [task, settask] = useState("");
  const [taskitems, settaskitems] = useState([]);

  const handleAddText = () => {
    settaskitems([...taskitems, task]);
    settask(null);
  };

  const completeTask = (index) => {
    let copyitems = [...taskitems];
    copyitems.splice(index, 1);
    settaskitems(copyitems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskitems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => {
            settask(text);
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => handleAddText()}
          style={styles.addText}
        >
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    alignItems: "center",
  },
  addText: {},
});
