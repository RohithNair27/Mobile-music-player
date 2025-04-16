import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  Button,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

function BottomSheet({ toggleModal, isModalVisible }) {
  const sortOptions = ["Title", "Artist", "Album", "Recently Played"];

  return (
    <Modal
      isVisible={isModalVisible}
      style={{ margin: 0 }}
      onBackdropPress={toggleModal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.headerText}>Sort by</Text>
        <ScrollView>
          {sortOptions.map((element) => {
            return (
              <Pressable style={styles.options}>
                <Text style={styles.optionsText}>{element}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  headerText: {
    color: "#ffff",
    fontWeight: "600",
  },
  modalContainer: {
    backgroundColor: "#121212",
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: "38%",
    padding: 25,
  },
  options: {
    paddingVertical: 15,
  },
  optionsText: {
    color: "#ffff",
  },
});
export default BottomSheet;
