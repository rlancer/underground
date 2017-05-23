import React from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import {NativeRouter, Route, Link} from 'react-router-native'

const story = {title: "Hello this is a test", body: 'Testing the body <b>user html</b>'};
const stories = [];

for (let i = 0; i < 50; i++) {
  stories.push({...story, key: i});
}

export default class Placelist extends React.Component {

  render() {
    return <FlatList style={{backgroundColor: 'pink', flex: 1}} data={stories}
                     renderItem={({item}) => <Story item={item}/>}/>
  }
}

class Story extends React.PureComponent {
  render() {
    const {item} = this.props;

    return <View style={{padding: 10, flex: 1}}>
      <Link to={`/place/${item.key}`}>
        <Text>
          {item.title} - {item.key}
        </Text>
      </Link>
    </View>;
  }
}
