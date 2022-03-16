import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../Components/NavAddButton';
import {TodoInputModal} from '../Components';

const TodoListingScreen = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          setModal={show => {
            setShowModal(show);
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Home Screen</Text>
      {showModal && (
        <TodoInputModal
          updateVisibility={visible => {
            console.log(visible);
            setShowModal(visible);
          }}
        />
      )}
    </View>
  );
};

export default TodoListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
