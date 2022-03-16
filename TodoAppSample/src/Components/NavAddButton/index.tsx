import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getScaledFont} from '../../HelperFuntions';

const AddButton: React.FC<{setModal: (show: boolean) => void}> = props => {
  return (
    <View style={styles.addButton}>
      <TouchableOpacity
        style={styles.fullSize}
        onPress={() => {
          props.setModal(true);
        }}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    marginRight: 10,
    width: 50,
    aspectRatio: 1,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullSize: {
    flex: 1,
  },
  plus: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaledFont(40),
  },
});
