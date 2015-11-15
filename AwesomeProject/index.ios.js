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
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'hidden',
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
  }
});

AppRegistry.registerComponent('Test', () => Test);
