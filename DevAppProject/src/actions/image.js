import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });  
    console.log('pickImage: ', result);
    return result;
};

const uploadImage = async (image, path) => {
    try {
        const response = await fetch(image);
        const blob = await response.blob();
        return (
            await uploadBytesResumable(
            ref(getStorage(), path),
            blob
        ));
    } catch (error) {
        return false;
    }
};

const getImageURL = async (path) => {
    const url = await getDownloadURL(ref(getStorage(), path))
    console.log('dog image url:', url);
    return url;
};

export default { pickImage, uploadImage, getImageURL };
