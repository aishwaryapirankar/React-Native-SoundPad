import React  from 'react';
import {TouchableOpacity, View , StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

function Box(props){
    const {onPressBox} = props;

    return(
        <TouchableOpacity onPress={onPressBox}>
            <View style={stylebox.box} />
        </TouchableOpacity>
    )
}

const stylebox = StyleSheet.create({
    box: {
        height: 150,
        width: 150,
        margin: 10,
        backgroundColor: 'rgb(0, 159, 227)',
    },
})

export default Box;