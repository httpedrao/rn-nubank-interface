import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  align-items: center;
  margin: 0 30px;
`;
export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 3px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.7);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.7);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.7);
  padding: 12px;
  margin-top: 15px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
