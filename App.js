import { useState, useEffect } from "react";
import { Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
export default function App() {
  const [Array, SetArray] = useState(["🗑️ throw away the trash", "🧹clean your room", "Eat 🍫"]);
  const [Content, SetContent] = useState();

  function AddContent() {
      if (Content !== '') {
        Array.push(Content);
        AddContent('');
        DrawerLayoutAndroidComponent
      }
  }
  
  function DeleteContent(name) {
      const Newİtem = Array.filter(t => t !== name);
      SetArray(Newİtem)
  }

  return (
    <SafeAreaView className="flex justify-start items-center bg-[#1B253C] h-[100vh] w-full">
      <View className="mt-3">
        <Image className="rounded-lg" source={{ uri: "https://miro.medium.com/max/1400/1*XxHPh5AP4YaorDlVKnE-_w.png", width: 380, height: 200 }} />
      </View>
      <View className="flex justify-center items-start flex-row m-6 border border-solid border-[#53C1DE] rounded-lg">
        <View>
          <TextInput
            className=" p-6  w-[200] m-0 text-center text-white"
            placeholder="Add New Content"
            placeholderTextColor="#fff"
            log
            onChangeText={(e) => SetContent(e)}
          />
        </View>
        <TouchableOpacity
          onPress={() => AddContent()}
          className="bg-[#ffffff0c] p-6 rounded-lg w-[150px]">
          <Text className="text-white text-center">
            AddTodo
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          Array.map((x, i) => {
            return (
              <View key={i} className="flex flex-row justify-between items-center bg-[#53C1DE] p-4 m-2 w-[350px] rounded-lg">
                <Text>
                  {x}
                </Text>
                <TouchableOpacity
                  onPress={() => DeleteContent(x)}>
                  <Text className="text-white">
                    🗑️
                  </Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
    </SafeAreaView>
  );
}