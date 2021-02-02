import React, { useState, useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components/native';
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const Container = styled.View`
    flex: 1;
    background-color: #fff;

    padding-left: 10px;
    padding-top: 20px;
`;

const NavButton = styled(AntDesign)`
    margin-right: 5px;
    font-size: 24px;
    padding: 4px;
`;

export default function DetailScreen({ navigation }) {

    const [todo, setTodo] = useState('')


    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {

            },
            headerRight: () => (
                <NavButton
                    name='save'
                    size={24}
                    color='black'
                    onPress={() => navigation.navigate('Home',{todo: todo})}/>
            ),
        })
    }, [todo, navigation])



    return (
        <Container>
            <TextInput
                onChangeText={text => setTodo(text)}
                value={todo}
                placeholder='Add new task' />
        </Container>
    )
}
