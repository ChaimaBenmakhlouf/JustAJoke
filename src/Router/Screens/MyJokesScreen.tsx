import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Button } from 'native-base';
import React, { useState } from "react";
import Constants from 'expo-constants';


const MyJokesScreen = () => {
    const [data, setData] = useState([{ name: '', response: '' }]);
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');
    return (
        <View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={styles.title}>Mes <Text style={styles.text}>blagues</Text> </Text>
                        <Text style={styles.title}>postées</Text>
                    </View>
        
        <View>
            <Text style={styles.eth}>761 ETH</Text>
        </View>
                </View>
            </View>
        
        <View style={styles.content}>
            <View style={styles.containerText}>
                <TextInput
                    style={styles.inputQuestion}
                    placeholder={'Commencez à blaguer...'}
                    onChangeText={(name) => setName(name)}
                    value={name}
        
                />
                 <TextInput
                    style={styles.inputResponse}
                    placeholder={'Reponse...'}
                    onChangeText={(response) => setResponse(response)}
                    value={response}
        
                />
        
            </View>
        
        <Text style={{color:'#FF9839', marginLeft: 30, marginTop:50, fontSize:10}}>Encore 1 blague disponible pour aujourd’hui*</Text>
        
        
        <Button style={styles.btn} onPress={() => {
            if (name) setData([...data, { name: name, response: response }]);
            
            
        } } >Publier</Button>
        
        </View>
        
        <View>
            <View>
                <FlatList 
                keyExtractor={(item) => item.name}
                data={data}
        
                renderItem={({ item }) => (
        <View style={styles.content}>
            
            <Text>{item.name}</Text>
            <Text style={styles.textResponse}>{item.response}</Text>
            <Button style={styles.btnLike}>25</Button>
           

 
        </View>
       
        
        )}
       
      />
        
            </View>
        </View>
        
        </View>
        
        
        );
    }
    const styles = StyleSheet.create({
        text: {
            color: 'red',
            
        },
        title: {
            marginLeft: 30,
            fontSize: 20,
            fontWeight: "bold"
        },
        eth: {
            
            color: '#FFFFFF',
            textAlign: 'center',
            width: 80,
            height: 30,
            fontWeight: "bold",
            backgroundColor: 'black',
            borderRadius: 30,
            
        },
        content: {
            marginTop: 60,
            backgroundColor: 'white',
            height: 300,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            borderRadius: 30,
            
            
        },
        contentText: {
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
        },
        contentJoke: {
            marginTop: 20,
        },
        containerText: {
            marginLeft: 25,
            flex: 1,
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
            padding: 8,
        },
        inputQuestion: {
            height: 100,
            margin: 10,
            marginTop: 30,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
        },

        inputResponse: {
            height: 100,
            margin: 10,
            marginBottom: 5,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
        },
        btn: {
            backgroundColor:'#F95F5E',
            width: 80,
            borderRadius: 30,
            marginLeft: 300,
            marginBottom: 30,
            
        },
        btnLike: {
            backgroundColor:'#F95F5E',
            width: 80,
            borderRadius: 30,
        },
        textResponse: {
            color: '#FF9839'
        }
        
        
    });
    export default MyJokesScreen
    