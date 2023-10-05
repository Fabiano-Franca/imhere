import { FlatList, GestureResponderEvent, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';
import { useState } from 'react';

export function Home() {
    const [participants, setParticipants] = useState(['Fabiano', 'Alícia'])
    
    function handleParticipantAdd(): void {
        if(participants.includes('Mathues')){
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome. ')
        }

        //setParticipants(prevState => [prevState, 'Mozão']); === ['Fabiano', 'Alícia'] => [['Fabiano', 'Alícia'], 'Mozão']; Joga o array inteiro dentro do array novo.
        setParticipants(prevState => [...prevState, 'Mozão']); // === ['Fabiano'] => ['Fabiano', 'Alícia', 'Mozão']; Desestrutura o array para pegar todo seu seu conteúdo e jogar dentro de novo array.
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
        Nome do evento
        </Text>
        <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
        </Text>
        
        <View style={styles.form}>
            <TextInput style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6B6B6B'/>

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
        {/* 
            ScrollView renderiza todos os seus componentes filhos de reação 
            de uma só vez, mas isso tem uma desvantagem de desempenho.

            FlatList renderiza itens lentamente, quando eles estão prestes a 
            aparecer, e remove itens que rolam para fora da tela para 
            economizar memória e tempo de processamento.
            
        */}
        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                </Text>
            )}
        />
    </View>
  );
}
