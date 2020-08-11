import React from 'react';
import { View, ImageBackground, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './style';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
 

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return (
        <View style={style.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={style.content}
            >
                <Text style={style.title}>Você quer ser um Proffy?</Text>
                <Text style={style.description}>
                    Para começar, você precisa se inscrever como professor em nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton
                style={[style.button]}
                onPress={handleNavigateBack}
            >
                <Text style={style.buttonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;