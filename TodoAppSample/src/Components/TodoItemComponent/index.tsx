import * as React from 'react';
import {View, Text, StyleSheet, InteractionManager} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getScaledFont} from '../../HelperFuntions';
import {TodoItem} from '../../Interfaces/TodoItem';
import {useDispatch} from 'react-redux';
import {updateData, updateTodoItem} from '../../Actions';

const TodoItemComponent: React.FC<{item: TodoItem}> = props => {
  const {item} = props;
  let {isCompleted} = item;
  const dispatch = useDispatch();

  return (
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
    width: '99%',
    borderRadius: 10,
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
});
