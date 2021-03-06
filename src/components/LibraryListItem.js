import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class LibraryListItem extends Component {

    render() {
        const { title, id } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection style={styles.titleStyle}>
                        <Text>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft:15
    }
};
export default connect(null, actions)(LibraryListItem)
