import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image } from 'react-native';

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
      <View className="gap-3 p-3">
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg font-semibold uppercase text-amber-700 ">{data.datetime}</Text>
            {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Este es el titulo</Text> */}
            <Text className="text-3xl font-bold" numberOfLines={2}>
              {data.title}
            </Text>
            <Text className="text-gray-700">{data.location}</Text>
          </View>
          <Image source={{ uri: data.image }} className="aspect-video w-2/5 rounded-xl" />
        </View>

        <View className="flex-row gap-3">
          <Text className="mr-auto text-gray-700">16 going</Text>

          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={24} color="gray" />
        </View>
      </View>
    </>
  );
}
