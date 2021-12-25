import * as React from 'react'
import { Text, TextInput, View } from 'react-native';
import baseStyle from '../baseStyle';
import { Config } from '../consts';
import { PlayerContext } from '../context/PlayerContext';
import ZamziButton from './ZamziButton';
import ZamziLogo from './ZamziLogo';
import ZamziTextInput from './ZamziTextInput';

type UserFormProps = {
  navigation: any,
  force: boolean
}

const UserForm: React.FC<UserFormProps> = ({navigation, force = false}) => {
  const player = React.useContext(PlayerContext)
  const [name, setName] = React.useState("")

  React.useEffect(() => {
    setName(player.name)
  }, [player.name])

  return (<View style={{backgroundColor: Config.BLUE, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ZamziLogo/>
    <Text style={baseStyle.bigWhiteMessage}>Please enter your name</Text>
    <ZamziTextInput value={name} onChange={setName}/>
    <ZamziButton title="Set Username" onPress={() => {
      player.setName(name)
      navigation.navigate('PinScreen')
    }} />
  </View>)
}

export default UserForm
