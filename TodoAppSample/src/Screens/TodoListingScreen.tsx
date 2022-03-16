import * as React from 'react';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../Components/NavAddButton';
import {TodoInputModal} from '../Components';
import {useSelector} from 'react-redux';
import {RootState} from '../Store';
import {TodoItem} from '../Interfaces/TodoItem';
import TodoItemComponent from '../Components/TodoItemComponent';

const TodoListingScreen = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = React.useState(false);

  const todoItems = useSelector(
    (state: RootState) => state.todoReducer.todoItems,
  );

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

  React.useEffect(() => {
    console.log(JSON.stringify(todoItems, undefined, 2));
  }, [todoItems]);

  const renderItem: ListRenderItem<TodoItem> = ({item}) => (
    <TodoItemComponent item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.fullSize}
      />
      {showModal && (
        <TodoInputModal
          updateVisibility={visible => {
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
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  fullSize: {flex: 1, width: '100%'},
});
