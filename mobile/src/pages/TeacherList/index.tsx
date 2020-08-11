import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import style from './style';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    })

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit(){
        loadFavorites();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time 
            }
        });

        setTeachers(response.data);
        setIsFiltersVisible(false);
    }

    return (
        <View style={style.container}>
            <PageHeader 
                title='Estes são os proffys disponíveis.' 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (<View style={style.searchForm}>
                    <Text style={style.label}>Materia</Text>
                    <TextInput
                        style={style.input}
                        placeholder="materia: "
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholderTextColor="#c1bccc"
                    />

                    <View style={style.inputGroup}>
                        <View style={style.inputBlock}>
                            <Text style={style.label}>Dia da semana</Text>
                            <TextInput
                                style={style.input}
                                placeholder="dia da semana: "
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={style.inputBlock}>
                            <Text style={style.label}>Hora</Text>
                            <TextInput
                                style={style.input}
                                placeholder="hora: "
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>

                    <RectButton style={style.submitButton} onPress={handleFiltersSubmit}>
                    <Text style={style.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>

            <ScrollView
                style={style.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;