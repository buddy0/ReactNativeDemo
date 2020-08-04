import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const data = {
    name: 'Elliot Thomson',
    designation: 'Associate Editor',
    articles: 34,
    followers: 980,
    rating: 8.9
}

function KeyValue(props: any) {
    return (<View style={{flexDirection: 'column', margin: 10}}>
        <Text style={{fontSize:8}} >{props.title}</Text>
        <Text>{props.value}</Text>
    </View>)
}

export default function Header() {
    return (
        <View>
            <View style={styles.headerBackground}>
            </View>
            <View style={styles.headerCard}>
                <View style={styles.rowFlex}>
                    <View style={styles.image}></View>
                    <View style={{padding: 10}}>
                        <Text>{data.name}</Text>
                        <Text>{data.designation}</Text>
                        <View style={styles.innerCard}>
                            <KeyValue title="Articles" value={data.articles}/>
                            <KeyValue title="Followers" value={data.followers}/>
                            <KeyValue title="Rating" value={data.rating}/>
                        </View>
                    </View>
                </View>
                <View style={styles.rowFlex}>
                    <View style={styles.leftButton}>
                        <Text>Chat</Text>
                    </View>
                    <View style={styles.rightButton}>
                        <Text style={styles.whiteText}>Follow</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBackground: {
        height: 210,
        backgroundColor: '#778899',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    headerCard: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        bottom: -80,
        borderStyle: 'solid',
        borderWidth: 1
    },
    innerCard: {
        flexDirection: 'row',
        backgroundColor: '#CBDAE2',
        justifyContent: 'space-between',
        borderWidth: 1,
        height: 60,
        marginTop: 10
    },
    rowFlex: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: '#33BBFF',
        borderRadius: 8,
        margin: 10
    },
    leftButton: {
        width: 110,
        height: 30,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#778899',
        borderRadius: 6,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightButton: {
        width: 110,
        height: 30,
        backgroundColor: '#3376FF',
        borderWidth: 1,
        borderColor: '#778899',
        borderRadius: 6,
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: 'white'
    }
});
