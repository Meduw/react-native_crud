import React, { useContext, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { productsContext } from "../contexts/productsContext";

export default function EditForm({ navigation, route }) {
  const { editProduct, getOneProduct } = useContext(productsContext);
  const [img, setImg] = useState(route.params.img);
  const [title, setTitle] = useState(route.params.title);
  const [info, setInfo] = useState(route.params.info);
  const [price, setPrice] = useState(route.params.price.toString());

  function handleClick() {
    let newProduct = {
      img,
      title,
      info,
      price: +price,
    };
    if (!img.trim() || !title.trim() || !info.trim() || !price.trim()) {
      return Alert.alert("Заполните все поля!");
    }
    editProduct(newProduct, route.params.id);
    getOneProduct(route.params.id);
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView contentContainerStyle={styles.form}>
            <TextInput
              value={img}
              onChangeText={(e) => setImg(e)}
              style={styles.form.input}
              placeholder="Вставьте ссылку для изображения..."
            />
            <TextInput
              onChangeText={(e) => setTitle(e)}
              value={title}
              style={styles.form.input}
              placeholder="Для названия продукта..."
            />
            <TextInput
              onChangeText={(e) => setInfo(e)}
              value={info}
              style={styles.form.input}
              placeholder="Для описания..."
            />
            <TextInput
              onChangeText={(e) => setPrice(e)}
              value={price}
              style={styles.form.input}
              placeholder="Введите цену товара"
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleClick} style={styles.form.button}>
              <Text style={styles.form.button.text}>Изменить продукт</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    gap: "10px",
    marginHorizontal: "auto",
    paddingTop: 100,
    input: {
      width: 300,
      padding: 20,
      borderRadius: 10,
      backgroundColor: "white",
    },
    button: {
      backgroundColor: "orange",
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 30,
      marginTop: 20,
      text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },
    },
  },
});
