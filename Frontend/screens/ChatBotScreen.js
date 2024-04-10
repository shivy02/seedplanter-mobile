import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Keyboard, useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { GiftedChat, InputToolbar, Composer, Bubble, Send } from 'react-native-gifted-chat'
import { sendMessage } from '../utils/sendchat'; 
import logo from '../assets/LogoActiveGreen.png';
import { useTheme, ThemeProvider } from 'styled-components/native';

// import { Markdown } from 'react-native-markdown-display';


export default function ChatBotScreen() {
  const [messages, setMessages] = useState([])
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [startConversation, setStartConversation] = useState(false);
  const theme = useTheme();

  
  const navigation = useNavigation();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Welcome back to SeedPlanter! How can I assist you today?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: logo,
        }
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setIsBotTyping(true);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    // // Check if the message is a quick reply and the value is 'tutorial'
    // if (messages[0].quickReply && messages[0].quickReply.value === 'tutorial') {
    //   // Set the bot's response to your predefined tutorial
    //   const tutorial = 'SeedPlanter is a gardening application that helps you keep track of your plants and their needs. You can add plants to your garden, view their details, and set reminders for watering, fertilizing, and pruning. You can also view the weather forecast for your location and get recommendations on what to plant based on the season. To get started, click on the plus button and follow the prompts to add a new plant to your garden. If you have any questions, feel free to ask!';

    //   setMessages(previousMessages =>
    //     GiftedChat.append(previousMessages, {
    //       _id: Math.random(),
    //       text: tutorial,
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: 'React Native',
    //         avatar: logo,
    //       },
    //     }),
    //   )

    //   setIsBotTyping(false);
    // } else {
      sendMessage(messages[0].text, messages, startConversation)
        .then(response => {
          setIsBotTyping(false);
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, {
              _id: Math.random(),
              text: response,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: logo,
              },
            }),
          )
        if (!startConversation) {
          setStartConversation(true);
        }
      })
    // }
  }, [startConversation]);

  const renderInputToolbar = (props) => (
    <InputToolbar {...props} containerStyle={[styles.inputToolbar, {backgroundColor: theme.gardenCard}]} />
  );
  
  const renderComposer = (props) => (
    <Composer {...props} textInputStyle={[styles.composer, {color: theme.text }]} />
  );
  const renderChatFooter = (props) => {
    if (isBotTyping) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Typing...</Text>
        </View>
      );
    }
    return null;
  };

const renderSendButton = (props) => {
  return(
    <Send {...props}>
      <View style={{ 
        marginBottom: 0,
        borderWidth: 0, 
        width: 34, 
        height: 34,
        borderRadius: 24,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#1DB954' 
      }}>
        <FontAwesome name="send" size={18} color="white" />
      </View>
  </Send>
  );
};
// const renderMessageText = (props) => {
//   const { currentMessage } = props;
//   return (
//     <View>
//       <Markdown>{currentMessage.text}</Markdown>
//     </View>
//   );
// };


  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#68b454', 
          },
          left: {
            backgroundColor: theme.gardenCard
          }
        }}
        textStyle={{
          left: {
            color: theme.text, // text color for bot's messages
          },
        }}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
       display: 'none',
      }
    });
    return () => navigation.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);

  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#e8ecf4'}, {backgroundColor: theme.background}]}>
      <View style={{marginLeft: 10, marginTop: 5}}>
        <Ionicons
          name="chevron-back-circle"
          size={40}
          color="#1DB954"
          style={{
            borderRadius: 15,
            padding: 5,
          }}
          onPress={() => {
            Keyboard.dismiss();
            navigation.goBack()
          }}
        />
      </View>
      <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          renderInputToolbar={renderInputToolbar}
          minInputToolbarHeight={70}
          renderChatFooter={renderChatFooter}
          renderBubble={renderBubble}
          renderSend={renderSendButton}
          renderComposer={renderComposer}
          placeholder="Ask me a gardening question..."
          user={{
            _id: 1,
          }}
        />
    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputToolbar: {
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  composer: {
    borderRadius: 25,
  },
  footerContainer: {
    // marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  footerText: {
    fontSize: 14,
    color: 'grey',
  },
});