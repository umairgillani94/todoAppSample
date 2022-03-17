import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getScaledFont} from '../../HelperFuntions';
import {TodoItem} from '../../Interfaces/TodoItem';
import {useDispatch} from 'react-redux';
import {deleteTodoItem, updateData, updateTodoItem} from '../../Actions';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

const TodoItemComponent: React.FC<{item: TodoItem}> = props => {
  const {item} = props;
  let {isCompleted} = item;
  const dispatch = useDispatch();

  const rightSwipeActions = () => {
    return (
      <View style={styles.deleteContainer}>
        <Text style={styles.textDelete}>Delete</Text>
      </View>
    );
  };

  const swipeFromRightOpen = () => {
    dispatch(deleteTodoItem(item));
    dispatch(updateData());
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={swipeFromRightOpen}>
        <View style={styles.fullWidth}>
          <View style={styles.container}>
            <View style={styles.checkbox}>
              <CheckBox
                disabled={false}
                value={isCompleted}
                onValueChange={newValue => {
                  isCompleted = newValue;
                  item.isCompleted = newValue;
                  item.updatedAt = Date();
                  dispatch(updateTodoItem(item));
                  setTimeout(() => {
                    dispatch(updateData());
                  }, 1000);
                }}
              />
            </View>
            <Text
              style={[
                styles.desc,
                {textDecorationLine: isCompleted ? 'line-through' : 'none'},
              ]}>
              {item.data}
            </Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default TodoItemComponent;

const styles = StyleSheet.create({
  fullWidth: {width: '100%'},
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '4%',
    borderWidth: 2,
    padding: '2%',
    width: '100%',
    backgroundColor: 'white',
  },
  checkbox: {
    marginLeft: '2%',
  },
  desc: {
    alignSelf: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    flex: 1,
    textDecorationStyle: 'solid',
    fontSize: getScaledFont(20),
  },
  deleteContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '4%',
  },
  textDelete: {
    color: 'white',
    fontWeight: '600',
    paddingHorizontal: 30,
  },
});
