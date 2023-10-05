import { FlatList, GestureResponderEvent, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';

export function Home() {

    const participants = ['Fabiano', 'Lorena', 'Márcio', 'Felipe', 'Lucas', 'Flávia', 'Flávio', 'Samuel', 'Fred', 'Chardson'];

    function handleParticipantAdd(event: GestureResponderEvent): void {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove(name: string) {
        //Essa função será passada por parâmetro para
        // o componente Participant e será executada dentro deste componente
        console.log(`Você clicou em remover o participante ${name}`);
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
        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)} />
            )}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}
