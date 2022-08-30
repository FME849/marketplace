import React, { FC } from 'react';
import { Provider as MetacraftProvider, themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { useSnapshot } from 'valtio';

import MarketplaceStack from './stacks';

export const AppContainer: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<MetacraftProvider>
			<NavigationContainer theme={theme}>
				<MarketplaceStack />
			</NavigationContainer>
		</MetacraftProvider>
	);
};

export default AppContainer;
