import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
    },
    searchingbar: {
      borderWidth: 1.5,
      borderColor: '#1DB954',
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 12,
      fontSize: 16,
    },
    ModalContainer: {
      backgroundColor: '#fff',
      position: 'relative',
    },
    centerItems: {
      alignItems: 'center',
    },
    card: {
      borderRadius: 25,
      elevation: 3,
      backgroundColor: 'transparent',
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 2,
      width: 180,
      height: 250,
    },
    cardContent: {
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'center',
    },
    cardImage: {
      width: 165,
      height: 180,
      borderRadius: 10,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    modalImageSizing: {
      width: 325,
      height: 250,
      paddingHorizontal: 15,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    modalImageSizing2: {
      width: 325,
      height: 250,
      padding: 10,
      resizeMode: 'cover',
      borderRadius: 20,
    },
    textContent: {
      marginTop: 5,
      flex: 1,
      alignItems: 'left',
    },
    plantName: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 1,
      marginTop: 2,
    },
    scientificName: {
      fontSize: 10,
      color: '#888',
      textAlign: 'left',
      marginBottom: 10
    },
    Backbutton: {
      alignItems: 'left',
      padding: 15, 
    },
    addbutton: {
      width: 150,
      borderRadius: 20,
      backgroundColor: '#1DB954',
      marginBottom: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightImageSize2: {
      width: 40,
      height: 40,
    },
    plantAdd: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18,
      paddingVertical: 10,
    },
    RightText: {
      justifyContent: 'center',
      fontSize: 30,
      marginTop: 10,
      marginLeft: 15,
      fontWeight: 'bold',
      color: '#1DB954',
      textAlign: 'left',
    },
    rightImageSize: {
      width: 10,
      height: 10,
    },
    sciNameText: {
      justifyContent: 'center',
      fontSize: 15,
      marginBottom: 20,
      marginTop: 5,
      marginLeft: 15,
      color: '#A8A8A8',
      textAlign: 'left',
    },
    DescriptionText: {
      fontSize: 20,
      marginLeft: 10,
      color: '#000000',
      fontWeight: 'normal',
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    DescriptionText2: {
      justifyContent: 'center',
      fontSize: 20,
      marginLeft: 10,
      color: '#7EC8E3',
      fontWeight: 'normal',
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    DescriptionText3: {
      justifyContent: 'center',
      fontSize: 20,
      marginLeft: 10,
      color: '#ffd061',
      fontWeight: 'normal',
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    DescriptionText4: {
      justifyContent: 'center',
      fontSize: 20,
      marginLeft: 10,
      color: '#1DB954',
      fontWeight: 'normal',
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    descriptionOfPlant: {
      justifyContent: 'center',
      fontSize: 15,
      marginBottom: 20,
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      color: '#707070',
      textAlign: 'justify',
      alignItems: 'center',
    },
    descriptionOfPlant2: {
      justifyContent: 'center',
      fontSize: 13,
      marginBottom: 20,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      color: '#707070',
      textAlign: 'justify',
      alignItems: 'center',
    },
    card3: {
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 2,
      width: 125,
      height: 125,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderColor: "#1DB954",
      borderWidth: 3
    },
    card7: {
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 2,
      width: 125,
      height: 125,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderColor: "#7EC8E3",
      borderWidth: 3
    },
    card9: {
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 2,
      width: 125,
      height: 125,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderColor: "#ffd061",
      borderWidth: 3
    },
    card10: {
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowRadius: 2,
      width: 125,
      height: 125,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      borderColor: "#ff7878",
      borderWidth: 3
    },
    cardText2: {
      justifyContent: 'center',
      fontSize: 16,
      color: '#000000',
      textAlign: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    cardText3: {
      justifyContent: 'center',
      fontSize: 8,
      color: '#707070',
      textAlign: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      marginTop: 5,
    },
    cardText7: {
      marginBottom: 5,
      justifyContent: 'center',
      fontSize: 20,
      color: '#ff7878',
      fontWeight: 'normal',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 5,
    },
    card4: {
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      justifyContent: 'center',
      shadowRadius: 2,
      width: 325,
      height: 400,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
    },
    cardBlue: {
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      justifyContent: 'center',
      shadowRadius: 2,
      width: 325,
      height: 400,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
    },
    cardYellow: {
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      justifyContent: 'center',
      shadowRadius: 2,
      width: 325,
      height: 400,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
    },
    cardGrey: {
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 20,
      justifyContent: 'center',
      shadowRadius: 2,
      width: 325,
      height: 430,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
    },
    cardRed: {
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#f2f7fc',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      padding: 5,
      justifyContent: 'center',
      shadowRadius: 2,
      width: 325,
      height: 40,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 25,
    },
    plusButtonContainer: {
      paddingRight: 35,
    },
  });