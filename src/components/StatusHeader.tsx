import { StatusBar as SB } from 'expo-status-bar';
import { StatusBar, View } from 'react-native';

import invertColor from '../utils/invertColor';

const StatusHeader = () => {
  const statusBarHeight = StatusBar.currentHeight || 0;

  // TODO: switch dynamically
  const backgroundColor = '#ffffff';
  const contrastColor = invertColor(backgroundColor, true);
  const barStyle = contrastColor === '#000000' ? 'dark' : 'light';

  return (
    <>
      <SB backgroundColor={backgroundColor} style={barStyle}></SB>
      <View
        style={{
          backgroundColor,
          height: statusBarHeight,
        }}
      />
    </>
  );
};

export default StatusHeader;
