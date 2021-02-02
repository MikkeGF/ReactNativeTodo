import React, { useState, useLayoutEffect, useEffect } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

const RowContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin: 10px 0px;
`;

const RowText = styled.Text`
    font-size: 20px;
    margin-left: 5px;
`;

const NavButton = styled(AntDesign)`
    margin-right: 5px;
    font-size: 24px;
    padding: 4px;
`;

export default function HomeScreen({ route, navigation }) {
    ;
    const STORAGE_KEY = '@todo_key'

    // const [todos, setTodos] = useState(
    //     Array(20)
    //         .fill('')
    //         .map((_, i) => (`Test ${i}`))
    // );
    const [todos, setTodos] = useState([])

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            return AsyncStorage.getItem(STORAGE_KEY)
                .then(reg => JSON.parse(reg))
                .then(json => {
                    if (json === null) {
                        json = [];
                    }
                    setTodos(json)
                })
                .catch(error => console.log(error));
        } catch (e) {
            console.log(e)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {

            },
            headerRight: () => (
                <NavButton
                    name='plus'
                    size={24}
                    color='black'
                    onPress={() => navigation.navigate('Todo')} />
            )
        })
    }, [navigation])

    useEffect(() => {
        if (route.params?.todo) {
           const newKey = todos.length + 1;
           const newTodo = {key: newKey.toString(), description: route.params.todo}
           const newTodos = [...todos, newTodo];
           storeData(newTodos)
        }
        getData();
    }, [route.params?.todo])




    return (
        <Container>
            <ScrollView>
                {
                    todos.map((todo) => (
                        <RowContainer key={todo.key}>
                            <RowText>{todo.description}</RowText>
                        </RowContainer>
                    ))
                }
            </ScrollView>
        </Container>
    )
}
