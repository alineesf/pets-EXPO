import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import styles from './LoginStyle';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('../../assets/logo.png');
const google = require('../../assets/google.png');
const facebook = require('../../assets/facebook.png');
const DOOR = require('../../assets/opendoor.png');

const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [activeTab, setActiveTab] = useState('Login');
  const [animation, setAnimation] = useState('fadeInRight');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(previousState => !previousState);
  };

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setAnimation(tab === 'Login' ? 'fadeInRight' : 'fadeInLeft');
      setActiveTab(tab);
    }
  };

  const handleSubmit = () => {
    if (!login || !password) {
      Alert.alert('Error', 'Por favor, preencha todos os campos!');
      return;
    }
  
    console.log(email, password);
    const userData = {
      email: login,
      password: password,
    };
  
    axios.post('http://192.168.15.11:5001/LoginForm', userData)
      .then(res => {
        console.log(res.data);
        if (res.data.status === 'ok') {
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
          if (res.data.userType) {
            AsyncStorage.setItem('userType', res.data.userType);
          } else {
            AsyncStorage.removeItem('userType');
          }
          setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
        } else {
          Alert.alert('Login Failed', 'Email ou senha inválidos!');
          setPassword('');
          setLoginError(true);
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Ocorreu um erro,', 'por favor, tente novamente mais tarde!');
      })
  }

  return (
    <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Image 
            source={activeTab === 'Login' ? logo : DOOR} 
            style={styles.image} 
            resizeMode='contain' 
          />
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Login' && styles.activeTab]}
              onPress={() => handleTabChange('Login')}>
              <Text style={[styles.textChange, activeTab === 'Login' && styles.activeTabText]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'phoneNumber' && styles.activeTab]}
              onPress={() => handleTabChange('phoneNumber')}>
              <Text style={[styles.textChange, activeTab === 'phoneNumber' && styles.activeTabText]}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <Animatable.View animation={animation} duration={1000}>
            {activeTab === 'Login' ? (
              <>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  value={login}
                  onChangeText={setLogin}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
                <View style={styles.rememberMe}>
                  <View style={styles.switch}>
                    <Switch value={rememberMe}
                      onValueChange={handleRememberMeToggle}
                      thumbColor={handleRememberMeToggle ? '#9C51FD' : '#9C51FD'}
                      trackColor={{ false: 'white', true: 'white' }}
                      style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}/>
                    <Text style={styles.rememberText}>Manter Conectado</Text>
                  </View>
                  <View>
                    <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                      <Text style={styles.forgetText}>Esqueceu a senha?</Text>
                    </Pressable>
                  </View>
                </View>
                <View>
                  <Text style={styles.optionsText}>------------------------  OU  ------------------------</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                  style={styles.input}
                  placeholder='Ana'
                  value={username}
                  onChangeText={setUsername}
                />
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                  style={styles.input}
                  placeholder='(48)91234-5678'
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder='ana@gmail.com'
                  value={email}
                  onChangeText={setRegisterEmail}
                />
                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                  style={styles.input}
                  placeholder='DD/MM/YYYY'
                  value={birthday}
                  onChangeText={setBirthday}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
                <Text style={styles.label}>Confirmar Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <View>
                  <Text style={styles.optionsText}>------------------------    OU  ------------------------  </Text>
                </View>
              </>
            )}
            <View style={styles.mediaIcons}>
              <Pressable onPress={() => Alert.alert("Login com Google")}>
                <Image source={google} style={styles.icons} />
              </Pressable>
              <Pressable onPress={() => Alert.alert("Login com Facebook")}>
                <Image source={facebook} style={styles.icons} />
              </Pressable>
            </View>
            <TouchableOpacity 
              style={styles.signInButton}
              onPress={activeTab === 'Login' ? handleSubmit : null}
            >
              <Text style={styles.signInButtonText}>{activeTab === 'Login' ? 'Entrar' : 'Cadastrar'}</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Login;