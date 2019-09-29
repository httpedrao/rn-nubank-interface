import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let open = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        open = true;
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: open ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = open ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

      // translateY.setOffset(offset)
      // translateY.setValue(0)
    }
  }
  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponínivel</Title>
              <Description>R$ 2.984,26</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$20,00 recebida de Beatriz Silva hoje às
                18:03h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
