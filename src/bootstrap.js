import * as Font from 'expo-font'

export async function bootstrap() {
  await Font.loadAsync({
    'bold': require('../assets/fonts/SFUITextBold.ttf'),
    'regular': require('../assets/fonts/SFUITextregular.ttf')
  })
}
