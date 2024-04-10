import { styles } from '../styles/CatalogStyles';
import React, { useState} from 'react';
import { Image } from 'expo-image';
import { addPlant } from '../utils/http';
import { Modal, View, Button, ScrollView, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
import { FontAwesome6, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import { useTheme, ThemeProvider } from 'styled-components/native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const PlantModal =({ plant, onClose, modalVisible }) => {
    console.log('Modal visible:', modalVisible);
    const theme = useTheme();

    return (
    <ThemeProvider theme={theme}>
    <Modal
        animationType="slide"
        presentationStyle='pageSheet'
        transparent={false}
        visible={modalVisible}
    >

    <View style={[styles.ModalContainer, { backgroundColor: theme.gardenBackground }]}>

        {/* Backbutton */}
        <View style={styles.Backbutton}>
            <Button title="Close" color={theme.text} alignItems="left" onPress={onClose}></Button>
        </View>
        
        <ScrollView>
        <View style={styles.centerItems}>
            <Image source={plant.image_urls && plant.image_urls[0] ? { uri: plant.image_urls[0] } : require('../resource/flower1.jpg')} style={styles.modalImageSizing} transition={300} />
        </View>
        <View style={styles.RightText}>
            <Text style={styles.RightText}>{plant.name}</Text>
        </View>
        <View style={styles.sciNameText}>
            <Text style={styles.sciNameText}>{plant.binomial_name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: "flex-end", marginTop: -65, marginBottom: 20}}>
            <TouchableOpacity style={styles.plusButtonContainer} onPress={() => {
            let id = '65efc324a82682e507e38ebc' + 1;
            gardenPlant = {
                _id: '66003bc6d48a27039a864f5b',
                id: plant.id,
                plantId: plant.id,
                water: true,
                fertilize: true,
                prune: true,
                waterLevel: 5,
                lastWateringDate: "2024-03-21",
                fertilizerLevel: 3,
                lastFertilizingDate: "2024-03-15",
                notes: "This is a test"
            }
            try {
                const response = addPlant(gardenPlant);
                console.log(response);
            } catch (err) {
                console.error(`Failed to add plant: ${err}`);
            }

            }}>
            <AntDesign name="pluscircle" size={35} color="#1DB954" />
        </TouchableOpacity>
        </View>
        
        {/* Description */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.cardGrey, { backgroundColor: theme.gardenCard }]}>
            <Text style={[styles.DescriptionText, { color: theme.text }]}>Description</Text>
            <Text style={[styles.descriptionOfPlant2, { color: theme.text }]}>{plant.description}</Text>
            </View>
        </View>

        <View style={{ justifyContent: 'center', flexDirection: 'row', }} >
            {/* Circle 1 */}
            <View style={[styles.card3, { backgroundColor: theme.gardenBackground }]}>
            <Text style={[styles.cardText2, { color: theme.text }]}>{plant.care_level}</Text>
            <FontAwesome6 name="plant-wilt" size={30} color="#1DB954" />
            <Text style={styles.cardText3}>Care Level</Text>
            </View>
            {/* Circle 2 */}
            <View style={[styles.card7, { backgroundColor: theme.gardenBackground }]}>
            <Text style={[styles.cardText2, { color: theme.text }]}>{plant.daily_watering}</Text>
            <MaterialCommunityIcons name="water" size={30} color="#7EC8E3" />
            <Text style={styles.cardText3}>Daily Watering</Text>
            </View>
        </View>

        <View style={{ justifyContent: 'center', flexDirection: 'row', }} >
        {/* Circle 3 */}
            <View style={[styles.card9, { backgroundColor: theme.gardenBackground }]}>
            <Text style={[styles.cardText2, { color: theme.text }]}>{plant.light}</Text>
            <Feather name="sun" size={30} color="#ffd061" />
            <Text style={styles.cardText3}>Sun</Text>
            </View>

        {/* Circle 4 */}
            <View style={[styles.card10, { backgroundColor: theme.gardenBackground }]}>
            <Text style={[styles.cardText2, { color: theme.text }]}>{plant?.zone?.hardy}</Text>
            <Feather name="map" size={30} color="#ff7878" />
            <Text style={styles.cardText3}>Hardy Zone</Text>
            </View>
        </View>

        {/* Pruing Description */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.card4, { backgroundColor: theme.gardenCard }]}>
            <Text style={styles.DescriptionText4}>Pruning Description</Text>
            <Text style={[styles.descriptionOfPlant2, { color: theme.text }]}>{plant.pruning_description}</Text>
            </View>
        </View>
        
        {/* Watering Description */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.cardBlue, { backgroundColor: theme.gardenCard }]}>
            <Text style={styles.DescriptionText2}>Watering Description</Text>
            <Text style={[styles.descriptionOfPlant2, { color: theme.text }]}>{plant.watering_description}</Text>
            </View>
        </View>
        
        {/* Sunlight Description */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.cardYellow, { backgroundColor: theme.gardenCard }]}>
            <Text style={styles.DescriptionText3}>Sunlight Description</Text>
            <Text style={[styles.descriptionOfPlant2, { color: theme.text }]}>{plant.sunlight_description}</Text>
            </View>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {/*<View style={styles.cardRed}> */}
            <Text style={styles.cardText7}>Hardiness Map</Text>
            {/*</View>*/}
        </View>

        <View style={{ paddingHorizontal: 35 }}>
            <WebView source={{ uri: plant.hardiness_url }} style={styles.modalImageSizing2}/>
        </View>


        {/* add onPress for the adding to catalog */}
        </ScrollView>
    </View>
    </Modal>
    </ThemeProvider>
    )
    };

export default PlantModal;