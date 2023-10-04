import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';

export function Home() {
    function handleParticipantAdd(event: GestureResponderEvent): void {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove() {
        //Essa função será passada por parâmetro para
        // o componente Participant e será executada dentro deste componente
        console.log("Função executada");
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

        <Participant name="Fabiano França" onRemove={handleParticipantRemove} />
        <Participant name='Lorena Portela' onRemove={handleParticipantRemove} />
        <Participant name='Márcio Giovanni' onRemove={handleParticipantRemove} />
        <Participant name='Flávia Araújo' onRemove={handleParticipantRemove} />
    </View>
  );
}
