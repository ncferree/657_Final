import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const AddButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.pop()}>
          <EvilIcons
                name={'plus'}
                size={40}
                color="white"
                style={{ alignSelf: 'left', horizontalMargin: 5,  }}
              /> 
    </TouchableOpacity>
  );
};

export default AddButton;
const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    right: 33,
    top: 5,
    zIndex: 100,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 15,
    justifyContent: 'right',
    alignItems: 'right',
  },
});