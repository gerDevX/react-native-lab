import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';

interface EventData {
  id: string;
  title: string;
  description: string;
  datetime: string;
  location: string;
  image: string;
}

export default function EventListItem({ data }: { data: EventData }) {
  return (
    <>
      <Link href={`/${data.id}`} asChild>
        <Pressable className="m-3 gap-3 border-b border-gray-100 pb-3">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-lg font-semibold uppercase text-amber-700 ">
                {dayjs(data.datetime).format('ddd, D MMM')} •{' '}
                {dayjs(data.datetime).format('h:mm A')}
              </Text>
              <Text className="text-2xl font-bold" numberOfLines={2}>
                {data.title}
              </Text>
              <Text className="text-gray-700">{data.location}</Text>
            </View>
            <Image source={{ uri: data.image }} className="aspect-video w-2/5 rounded-xl" />
          </View>
          <View className="flex-row gap-3">
            <Text className="mr-auto text-gray-700">16 going</Text>

            <Feather name="share" size={20} color="gray" />
            <Feather name="bookmark" size={20} color="gray" />
          </View>
        </Pressable>
      </Link>
    </>
  );
}
