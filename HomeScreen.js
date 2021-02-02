import React, { useState, useLayoutEffect, useEffect } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';


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
    margin-left: 5;
`;

const NavButton = styled(AntDesign)`
    margin-right: 5px;
    font-size: 24px;
    padding: 4px;
`;

export default function HomeScreen({ route, navigation }) {
    
    const [todos, setTodos] = useState(
        Array(20)
            .fill('')
            .map((_, i) => (`Test ${i}`))
    );


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
            const NewTodos = [...todos,route.params?.todo];
            setTodos(NewTodos)
        }

    }, [route.params?.todo])




    return (
        <Container>
            <ScrollView>
                {
                    todos.map((todo, index) => (
                        <RowContainer key={index}>
                            <RowText>{todo}</RowText>
                        </RowContainer>
                    ))
                }
            </ScrollView>
        </Container>
    )
}
