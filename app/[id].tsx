import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

import events from '~/assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const event = events.find((event) => event.id === id);

  return (
    <View>
      <Text>{event?.title}</Text>
    </View>
  );
}
