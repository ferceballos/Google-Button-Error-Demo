import React, { Component } from "react";
import { View, Image, ImageBackground } from 'react-native';
import { Container, Button, Content, Text, Form, Item, Input, Label, Thumbnail, H3 } from 'native-base';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        function goToSelection() {
            navigate('Selection');
        }

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>

                <View style={{ flex: 2.4, width: '100%', backgroundColor: 'grey' }}>
                    <Image style={{ height: '100%', width: '100%' }} resizeMode="cover" source={require('../../../assets/images/logincover.jpg')} />
                </View>

                <View style={{ flex: 1 }} />

                <View style={{ flex: 2, width: '80%' }}>
                    <H3 style={{ color: '#616161' }} >So, this is my login screen</H3>
                    <Text style={{ color: '#616161' }}>the "next" button should redirect me to another screen in which the Google Button is located</Text>
                </View>

                <View style={{ flex: 1.4, width: '80%' }}>
                    <Item floatingLabel placeholder="Something">
                        <Label>Text your email</Label>
                        <Input style={{ color: '#757575', paddingLeft: 0 }} />
                    </Item>

                </View>

                <View style={{ flex: 0.2 }} />


                <View style={{
                    flex: 1, alignItems: 'flex-end',
                    width: '80%', justifyContent: 'center'
                }}  >
                    <View>
                        <Button iconLeft style={{}} onPress={() => goToSelection()}>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </View>

                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

export default LoginScreen;
