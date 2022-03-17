import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getScaledFont} from '../../HelperFuntions';
import {TodoItem} from '../../Interfaces/TodoItem';
import {useDispatch} from 'react-redux';
import {deleteTodoItem, updateData, updateTodoItem} from '../../Actions';
import {Swipeable} from 'react-native-gesture-handler';

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
    console.log('Swipe from right');
    dispatch(deleteTodoItem(item));
    dispatch(updateData());
  };

  return (
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
                setTimeout(() => {
                  dispatch(updateTodoItem(item));
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
    backgroundColor: '#ff8303',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '4%',
  },
  textDelete: {
    color: '#1b1a17',
    paddingHorizontal: 10,
    fontWeight: '600',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
