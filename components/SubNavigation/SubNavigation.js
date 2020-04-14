import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import colors from '../../constants/Colors';

const data = [
    {
        label: 'Avant match',
        page: 'nextMatch',
        active: true,
        isDisabled: false,
        isVisible: true,
    },
    {
        label: 'Resume',
        page: 'resume',
        active: false,
        isDisabled: true,
        isVisible: false,
    },
    {
        label: 'Composition',
        page: 'composition',
        active: false,
        isDisabled: false,
        isVisible: true,
    },
    {
        label: 'Direct Live',
        page: 'directLive',
        active: false,
        isDisabled: true,
        isVisible: true,
    },
    {
        label: 'Statistiques',
        page: 'statistics',
        active: false,
        isDisabled: false,
        isVisible: true,
    }
];

const SubNavigation = (props) => {

    const formatData = () => {
        let formattedData = [];
        data.forEach(item => item.isVisible && formattedData.push(item));
        return formattedData;
    };

    const [navData, setNavData] = useState(formatData());

    const renderSubNavigation = () => navData.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <TouchableOpacity
                    style={[styles.subNavTab, item.active && styles.active]}
                    disabled={item.isDisabled}
                    onPress={() => !item.isDisabled && handleOnClick(index)}
                >
                    <Text style={[styles.label, item.active && styles.labelActive, item.isDisabled && styles.labelDisabled]}>{item.label}</Text>
                </TouchableOpacity>
                {
                    index !== navData.length - 1 && //if its not the last
                    !item.active &&                 //if its not active
                    !navData[index+1]?.active &&    //if the element after it is not active

                    <View style={
                        styles.divider
                    }/>
                }
            </React.Fragment>
        )
    });

    const handleOnClick = index => {
        let updateData = navData.map(item => ({...item, active: false}));
        updateData[index].active = true;
        setNavData(updateData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                {
                    renderSubNavigation()
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.midnight,
        padding: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.navBarBlue,
        borderRadius: 6,
        padding: 1,
    },
    subNavTab: {
        flexGrow: 1,
        padding: 5
    },
    label: {
        textAlign: 'center',
        color: colors.trueWhite,
        fontWeight: 'bold'
    },
    labelActive: {
        color: colors.ebony
    },
    labelDisabled: {
        color: colors.scorpion
    },
    divider: {
        width: 2,
        marginTop: 6,
        marginBottom: 6,
        backgroundColor: colors.scorpion
    },
    active: {
        borderRadius: 6,
        backgroundColor: colors.trueWhite,
    }
});

export default SubNavigation;
