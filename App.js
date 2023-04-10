import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  console.log(Platform.OS);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("./assets/images/bg.jpg")}>
          <View
            style={{
              ...styles.form, paddingBottom: isShowKeyboard ? 200 : 66
            }}>
            <Text style={styles.formTitle}>Регистрацияя</Text>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              value={state.name}
              onFocus={()=> setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, name: value }))
              }
            />
            
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={()=> setIsShowKeyboard(true)}
              value={state.email}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            
            <TextInput
              style={{ ...styles.input, marginBottom: 43 }}
              placeholder="Пароль"
              value={state.password}
              secureTextEntry={true}
              onFocus={()=> setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}>
              <Text style={styles.btnTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            
            <Text style={styles.text}>Уже есть аккаунт? Войти</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    paddingTop: 92,
    paddingBottom: 66,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  formTitle: {
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    backgroundColor: "#F6F6F6",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: 400,
    color: "#FFFFFF",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    color: "#1B4371",
  }
});