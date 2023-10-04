import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';

export function Home() {
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

        <Participant name="Fabiano França" onRemove={() => handleParticipantRemove("Fabiano")} />
        <Participant name='Lorena Portela' onRemove={() => handleParticipantRemove("Lorena")} />
        <Participant name='Márcio Giovanni' onRemove={() => handleParticipantRemove("Márcio")} />
        <Participant name='Flávia Araújo' onRemove={() => handleParticipantRemove("Flávia")} />
    </View>
  );
}
