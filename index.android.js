const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
const Pedometer = require('./Pedometer');

const reactNativePedometer = React.createClass({
  getInitialState() {
      return {
        startDate: null,
        endDate: null,
        numberOfSteps: 0,
        distance: 0,
        floorsAscended: 0,
        floorsDescended: 0,
        currentPace: 0,
        currentCadence: 0,
      };
    },

  componentDidMount() {
    this._startUpdates();
  },

  _startUpdates() {
    const today = new Date();
    today.setHours(0,0,0,0);

    Pedometer.startPedometerUpdatesFromDate(today.toTime(), (motionData) => {
      console.log("motionData: " + motionData);
      this.setState(motionData);
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeNotice}>
          {this.state.numberOfSteps}
        </Text>
        <Text style={styles.status}>
          You walked {this.state.numberOfSteps} step{this.state.numberOfSteps==1 ? '' : 's'}, or about {this.state.distance} meters.
          </Text>
          <Text style={styles.status}>
          You went up {this.state.floorsAscended} floor{this.state.floorsAscended==1 ? '' : 's'}, and down {this.state.floorsDescended}.
        </Text>
        <Text style={styles.instructions}>
          Just keep your phone in your pocket and go for a walk!
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativePedometer', () => reactNativePedometer);
