import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

export const BuildDashboard: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Hello</Text>
		</View>
	);
};

export default BuildDashboard;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		maxWidth: 1024,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: 32,
	},
	innerContainer: {
		flex: 1,
	},
	sideContainer: {},
});
