import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  items: string[]
}

export const List = memo(function List({ items }: Props) {
  return items.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  ))
})

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    margin: 4,
    padding: 4,
    backgroundColor: '#e3bba2',
  },
  listText: {
    textAlign: 'center',
  },
})
