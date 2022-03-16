import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {getScaledFont} from '../../HelperFuntions';
import {TodoItem} from '../../Interfaces/TodoItem';

const TodoItemComponent: React.FC<{item: TodoItem}> = props => {
  const {item} = props;
  const [toggleCheckBox, setToggleCheckBox] = React.useState(item.isCompleted);

  return (
    <View style={styles.fullWidth}>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => {
              setToggleCheckBox(newValue);
              item.isCompleted = newValue;
            }}
          />
        </View>
        <Text
          style={[
            styles.desc,
            {textDecorationLine: toggleCheckBox ? 'line-through' : 'none'},
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
