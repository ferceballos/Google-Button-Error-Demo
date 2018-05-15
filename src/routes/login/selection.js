import React, { Component } from "react";
import { View, Image, ImageBackground } from 'react-native';
import { Container, Button, Content, Text, Form, Item, Input, Label, Thumbnail, Header, Left, Icon, Body, Title } from 'native-base';
import GoogleButton from 'react-google-button';

class SelectionScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>


                <View style={{ flex: 1, width: '100%', flexDirection: 'column' }}>
                    <View style={{ flex: 1 }}>
                        <Button iconLeft bordered light style={{ borderColor: 'transparent', backgroundColor: 'transparent' }} onPress={() => goBack()}>
                            <Icon name="arrow-back" style={{ fontSize: 18, color: '#757575' }} />
                            <Text style={{ color: '#757575' }}>Regresar</Text>
                        </Button>
                    </View>

                    <View style={{ flex: 3 }}>

                    </View>
                </View>

                <View style={{ flex: 3 }} />

                <View style={{ flex: 1 }}>
                     <GoogleButton style={{ width: '80%' }} label='Continuar con Google' onClick={() => { console.log('Google button clicked') }} />
                </View>

                <View style={{ flex: 1 }}>
                    <Button style={{ width: '90%' }}><Text> Continuar con UCOL </Text></Button>
                </View>

                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

export default SelectionScreen;
