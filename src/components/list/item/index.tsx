import { View, Pressable, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsProps } from '..'

export default function RestaurantItem({item}: {item: RestaurantsProps}) {
  return (
    <Pressable className='flex flex-row items-center justify-start gap-2'>
      <Image
        source={{uri: item.image}}
        style={{ width: 80, height: 80, borderRadius: 9999}}
      />

      <View className='flex gap-2'>
        <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>{item.name}</Text>

        <View className='flex-row items-center gap-1'>
            <Ionicons name='star' size={14} color={"#CA8A04"}/>
            <Text className='text-sm'>4.5</Text>
        </View>
      </View>
    </Pressable>
  )
}