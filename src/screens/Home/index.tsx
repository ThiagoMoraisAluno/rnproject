import { useState } from 'react';
import {Text,View,TextInput,TouchableOpacity,FlatList,Alert} from 'react-native';
import { styles } from './styles';

import { Participants } from '../../components/Participants';

export function Home(){
    const [participants,setParticipants] = useState<string[]>([])
    const [participantName,setParticipantName] = useState('');

    

    function handlePartcipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe','Já existe um participante na lista com esse nome.')
        }

        setParticipants(prevState =>[...prevState,participantName]);
        setParticipantName('')
    }

    function handleParticipantRemove(name:String){
        
        Alert.alert('Remover',`Deseja remover o participante ${name}?`,[
            {
                text:'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text:'Não',
                style:'cancel'
            }
        ])
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.eventName}>Colação de grau</Text>
            <Text style = {styles.eventDate}>Quarta, 31 de Julho de 2024.</Text>

            <View style = {styles.form}>
            <TextInput 
            style = {styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6b6b6b'
            onChangeText={setParticipantName}
            value = {participantName}
            />

            <TouchableOpacity style = {styles.button} onPress={handlePartcipantAdd}>
                <Text style = {styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
            </View>

            <FlatList
            data = {participants}
            keyExtractor={item => item}
            renderItem = {({item}) => (
                <Participants 
                    key = {item}
                    name = {item} 
                    onRemove = {() => handleParticipantRemove(item)}/>
                )}

            showsVerticalScrollIndicator = {false}
            ListEmptyComponent={() => (
                <Text style = {styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
            )}
            />

        </View>
    )
}