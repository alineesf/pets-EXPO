import React, { useState } from 'react';
import {
    Text,
    SafeAreaView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './ForgotPasswordStyle';

const ForgotPassword = () => {
    return(
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Esqueceu sua senha?</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default ForgotPassword;