import { Controller, useForm } from 'react-hook-form'
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'

import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import BackgroundImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormData = {
  email: string,
  password: string
}

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const { control, handleSubmit, formState: {errors} } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  function handleSingleIn({ email, password }: FormData) {
    console.log(email, password)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Heading color="$gray100">
              Tech Gym
            </Heading>

            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse sua conta</Heading>

            <Controller
              control={control}
              name="email"
              rules={{required: 'Informe o e-mail'}}
              render={({ field: {onChange} }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  autoCapitalize="none"
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{required: 'Informe a senha'}}
              render={({ field: {onChange} }) => (          
                <Input 
                  placeholder="Senha"
                  secureTextEntry 
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button title="Acessar" onPress={handleSubmit(handleSingleIn)} />
          </Center>

          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
