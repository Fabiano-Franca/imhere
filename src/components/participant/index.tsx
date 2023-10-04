import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Participant(props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
}