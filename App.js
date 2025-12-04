import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';


export default function TaskInput({ onAdd }) {
const [text, setText] = useState('');


function handleAdd() {
if (!text.trim()) return;
onAdd(text);
setText('');
Keyboard.dismiss();
}


return (
<View style={styles.container}>
<TextInput
placeholder="Nova tarefa"
value={text}
onChangeText={setText}
style={styles.input}
onSubmitEditing={handleAdd}
returnKeyType="done"
/>
<Button title="Adicionar" onPress={handleAdd} />
</View>
);
}


const styles = StyleSheet.create({
container: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
input: {
flex: 1,
borderWidth: 1,
borderColor: '#DDD',
borderRadius: 8,
paddingHorizontal: 12,
paddingVertical: 8,
marginRight: 8,
backgroundColor: '#FFF'
},
});