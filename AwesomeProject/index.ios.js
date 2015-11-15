/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var websiteUrl = 'http://a538b376.ngrok.io/';

var Test = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <WebView
          url={websiteUrl}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          javaScriptEnabledAndroid={true}
          scalesPageToFit={false}
        />
        // <Text style={styles.welcome}>
        //   Welcome to React Native!
        // </Text>
        // <Text>
        //   Really?
        // </Text>
        // <Text style={styles.instructions}>
        //   To get started,  DO NOTEWFAW EFWEF edit index.ios.js
        // </Text>
        // <Text style={styles.instructions}>
        //   Press Cmd+R to reload,{'\n'}
        //   Cmd+D or shake for dev menu
        // </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: 'rgb(34, 65, 34)',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  webView: {
    flex: 1,
    height: 300
  }
});

AppRegistry.registerComponent('Test', () => Test);
