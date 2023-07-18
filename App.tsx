/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  NativeModules
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SettingProps = {
  title: string;
  setting: string;
};

const { SharedPreferences } = NativeModules;

const SettingInput = ({title, setting}: SettingProps): JSX.Element => {
  const [text, setText] = React.useState("");

  SharedPreferences.get(setting, 'unset', (value) => {
    setText(value);
  });

  onChangeText = (s: string) => {
    setText(s)
    SharedPreferences.set(setting, s);
  }

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.inputContainer}>
      <Text
        style={[
          styles.inputTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <TextInput
        style = {[styles.input]}
        onChangeText={onChangeText}
        value={text}
        />
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <SettingInput title="Setting" setting="setting"></SettingInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default App;
