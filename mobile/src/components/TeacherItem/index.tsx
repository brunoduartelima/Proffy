import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import style from './style';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}



const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorites] = useState(favorited);

    function handleLinkToWhatsapp(){
        api.post('connections', {
            user_id: teacher.id,
        })

        Linking.openURL(`whatsapp://send?phone${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        
        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorites(false); 
        } else {
            favoritesArray.push(teacher);

            setIsFavorites(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    
    return(
        <View style={style.container}>
            <View style={style.profile}>
                <Image 
                    style={style.avatar}
                    source = {{uri: teacher.avatar}}
                    />

                <View style={style.profileInfo}>
                <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={style.bio}>{teacher.bio}</Text>
            <View style={style.footer}>
                <Text style={style.price}>
                    Preço/Hora {'   '}
                    <Text style={style.priceValue}>{teacher.cost}</Text>
                </Text>
            </View>
            <View style={style.buttonsContainer}>
                <RectButton 
                    onPress={handleToggleFavorite} 
                    style={[
                        style.favoriteButton,
                        isFavorited ? style.favorited : {},
                    ]}
                >
                    {isFavorited
                        ? <Image source={unfavoriteIcon}></Image> 
                        : <Image source={heartOutlineIcon}></Image>
                    }
                </RectButton>

                <RectButton onPress={handleLinkToWhatsapp} style={style.contactButton}>
                    <Image source={whatsappIcon}></Image>
                    <Text style={style.contactButtonText}>Contato</Text>
                </RectButton>
            </View>
        </View>
    );
}


export default TeacherItem;