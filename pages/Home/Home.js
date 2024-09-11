import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Pressable,
    Image,
    ActivityIndicator,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './HomeStyle';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import OctICON from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();

    const profilePick = require('../../assets/Profile-pick.png');
    const rectangleImage1 = require('../../assets/vacina.png');
    const rectangleImage2 = require('../../assets/documento.png');

    useEffect(() => {
        const getData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                const response = await axios.post('http://192.168.15.11:5001/userdata', { token: token });
                setUserData(response.data.data);
            } catch (error) {
                console.error(error);
                Alert.alert('Erro', 'Ocorreu um erro ao obter dados do usuário. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    return (
        <LinearGradient colors={['#9C51FD', '#2B1840']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Pet's Care</Text>

                <View style={styles.sectionBody}>
                    <Pressable
                        onPress={() => navigation.navigate('EditProfile')}
                        style={styles.profile}
                    >
                        <Image
                            source={userData && userData.profileImage ? { uri: `http://192.168.15.11:5001/${userData.profileImage.replace(/\\/g, '/')}` } : profilePick}
                            style={styles.profileAvatar}
                        />
                        <View style={styles.profileBody}>
                            {loading ? (
                                <ActivityIndicator size="large" color="#FFA825" />
                            ) : (
                                <View style={styles.profileContent}>
                                    <Text style={styles.profileName}>
                                        Bem-vindo, {userData ? userData.username : 'Carregando...'}
                                    </Text>
                                    <IoICON name='notifications-outline' size={32} color='white' style={styles.profileIcon} />
                                </View>
                            )}
                            <Text style={styles.profileHandle}>
                                {userData ? userData.email : 'Carregando...'}
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} backgroundColor="#004CF2">
                        <Text style={styles.rectangleTitle}>Carteira de vacina</Text>
                        <Image source={rectangleImage1} style={styles.rectangleImage} />
                    </View>
                    <View style={styles.rectangle} backgroundColor="#FF5362">
                        <Text style={styles.rectangleTitle}>Histórico do Pet</Text>
                        <Image source={rectangleImage2} style={styles.rectangleImage} />
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tabBar}>
                <AntICON name='home' size={50} style={getTabIconStyle('Home')} marginTop={18} onPress={() => navigation.navigate('Home')} color="white"/>
                <IoICON name='paw-outline' size={50} style={getTabIconStyle('Pet')} marginTop={18} onPress={() => navigation.navigate('Pet')} color="white"/>
                <FeatherICON name='message-circle' size={50} style={getTabIconStyle('Notifications')} marginTop={18} onPress={() => navigation.navigate('Notifications')} color="white"/>
                <OctICON name='gear' size={50} style={getTabIconStyle('Settings')} marginTop={18} onPress={() => navigation.navigate('Settings')} color="white"/>
            </SafeAreaView>
        </LinearGradient>
    );
};

export { Home };