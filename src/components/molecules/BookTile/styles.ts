import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  cover: {
    width: 80,
    height: 120,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contetWrap: {flex: 1, justifyContent: 'space-between', paddingBottom: 4},
  content: {gap: 8},
});

export default styles;
