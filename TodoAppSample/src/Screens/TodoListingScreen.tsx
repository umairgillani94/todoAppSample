import * as React from 'react';
import {View, StyleSheet, FlatList, ListRenderItem, Text} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AddButton from '../Components/NavAddButton';
import {TodoInputModal} from '../Components';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../Store';
import {TodoItem} from '../Interfaces/TodoItem';
import TodoItemComponent from '../Components/TodoItemComponent';
import {FilterType} from '../Enums';
import {updateData} from '../Actions';

const TodoListingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const todoItems = useSelector(
    (state: RootState) => state.todoReducer.todoItems,
  );

  const refresh = useSelector(
    (state: RootState) => state.todoReducer.refreshFlag,
  );

  const [showModal, setShowModal] = React.useState(false);
  const [filterType, setFilterType] = React.useState(FilterType.All);
  const [data, setData] = React.useState<(TodoItem | undefined)[]>([]);

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

  useFocusEffect(
    React.useCallback(() => {
      dispatch(updateData());
    }, [navigation]),
  );

  React.useEffect(() => {
    setFilterType(route.params?.filter);
  }, []);

  React.useEffect(() => {
    updateListData();
  }, [refresh]);

  const updateListData = () => {
    if (!todoItems) {
      return;
    }
    if (filterType === FilterType.All) {
      setData([...todoItems]);
    } else if (filterType === FilterType.Completed) {
      const newData = todoItems.filter(item => {
        return item?.isCompleted === true;
      });
      setData(newData);
    } else if (filterType === FilterType.Pending) {
      const newData = todoItems.filter(item => {
        return item?.isCompleted === false;
      });
      setData(newData);
    } else if (filterType === FilterType.Deleted) {
      const newData = todoItems.filter(item => {
        return item?.isArchieved === true;
      });
      setData(newData);
    }
  };

  const renderItem: ListRenderItem<TodoItem | undefined> = ({item}) => (
    <TodoItemComponent item={item!} />
  );

  return (
    <View style={styles.container}>
      {data.length > 0 && (
        <FlatList
          extraData={refresh}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item!.id}
          style={styles.fullSize}
        />
      )}
      {data.length === 0 && <Text>No data available</Text>}
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
    justifyContent: 'center',
  },
  fullSize: {flex: 1, width: '100%'},
});
