import * as React from 'react';
import {
  TextInput,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {getScaledFont} from '../../HelperFuntions';

const TodoInputModal: React.FC<{
  updateVisibility: (visible: boolean) => void;
}> = props => {
  let inputRef = React.createRef<TextInput>();

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef?.current?.focus();
    }
  }, []);

  const handleAddAction = () => {};

  return (
    <Modal transparent={true} visible={true} animationType={'slide'}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.flex1}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex1}>
          <View style={styles.container}>
            <View style={styles.popup}>
              <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Enter Todo Item"
                keyboardType="numbers-and-punctuation"
              />
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.btnTO}
                  onPress={() => {
                    handleAddAction();
                  }}>
                  <Text style={styles.btnTitle}>ADD</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btnContainer2}>
                <TouchableOpacity
                  style={styles.btnTO}
                  onPress={() => {
                    props.updateVisibility(false);
                  }}>
                  <Text style={styles.btnCanelTitle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TodoInputModal;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  popup: {
    width: '90%',
    height: undefined,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  input: {
    width: '80%',
    height: 40,
    margin: '5%',
    borderWidth: 1,
  },
  btnContainer: {
    marginTop: '5%',
    marginBottom: '5%',
    width: '50%',
    borderRadius: 1000,
    backgroundColor: 'purple',
    overflow: 'hidden',
  },
  btnContainer2: {
    marginBottom: '5%',
    width: '50%',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  btnTO: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaledFont(30),
    paddingBottom: 10,
    paddingTop: 10,
  },
  btnCanelTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: getScaledFont(30),
    paddingBottom: 10,
    paddingTop: 10,
    color: 'red',
  },
});
