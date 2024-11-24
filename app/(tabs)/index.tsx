import { Stack } from 'expo-router';

import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      {/* Event List Item */}
      <EventListItem data={events[0]} />
      <EventListItem data={events[1]} />
      <EventListItem data={events[2]} />
    </>
  );
}
