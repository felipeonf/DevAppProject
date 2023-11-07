import { Pressable, Text, Image, StyleSheet } from "react-native";


const ImageButton = ({ onPress, text="", photoURL="" }) => {
    if(photoURL == ""){
        return (
            <Pressable style={styles.btnImage} onPress={onPress}>
                <Text style={styles.btnImageText}>{text}</Text>
            </Pressable>
        )
    }else {
        return (
            <Pressable style={styles.btnImage} onPress={onPress}>
                <Image source={{ uri: photoURL }}  style={styles.image}/>
            </Pressable>
        )
    }
};

const styles = StyleSheet.create({
    btnImage: {
        width: 128,
        height: 128,
        backgroundColor: '#e6e7e7',
        borderRadius: 4,
        marginBottom: 32,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnImageText: {
        color: '#757575',
        fontSize: 14,
        textAlign: 'center',
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 125,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#e6e7e7",
        marginBottom: 32,
    }
});

export default ImageButton;
