import React, { FC, ReactNode } from 'react';
import {
	Image,
	ImageStyle,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import { Text } from '@metacraft/ui';
// import resources from '../../utils/resources';
import resources from 'utils/resources';

interface Props {
	style?: ViewStyle;
	children: string | ReactNode;
	textStyle?: TextStyle;
	onPress?: () => void;
}

export const ButtonFantasy: FC<Props> = ({
	style,
	children,
	textStyle,
	onPress,
}) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<Image
				style={styles.mid}
				source={resources.buttonFantasy.middleBackground}
				resizeMode="repeat"
			/>
			<Image
				style={styles.leftEdge}
				source={resources.buttonFantasy.leftEdge}
			/>
			<Image
				style={styles.rightEdge}
				source={resources.buttonFantasy.rightEdge}
			/>
			{typeof children === 'string' && (
				<Text style={[styles.childStyle, textStyle]}>{children}</Text>
			)}
		</TouchableOpacity>
	);
};

export default ButtonFantasy;

const scale = 0.15;

const backgroundPosition = {
	position: 'absolute',
	top: 0,
	bottom: 0,
} as ImageStyle;

const styles = StyleSheet.create({
	container: {
		minWidth: 1000 * scale,
		minHeight: 306 * scale,
		justifyContent: 'center',
		alignItems: 'center',
	},
	leftEdge: {
		...backgroundPosition,
		left: 0,
		width: 302 * scale,
	},
	rightEdge: {
		...backgroundPosition,
		right: 0,
		width: 300 * scale,
	},
	mid: {
		...backgroundPosition,
		left: 50 * scale,
		right: 50 * scale,
	},
	childStyle: {
		position: 'relative',
	},
});
