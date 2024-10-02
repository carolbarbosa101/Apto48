import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Card, Avatar, BottomNavigation } from 'react-native-paper';



const HomeScreen = () => {
    const [index, setIndex ] = React.useState(0);
    const [ routes ] = React.useState([
        { key: 'home', title: 'Inicio', icon: 'home' },
        { key: 'search', title: 'Buscar', icon: 'magnify' },
        { key: 'favorites', title: 'Favoritos', icon: 'heart' },
        { key: 'profile', title: 'Perfil', icon: 'account' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        search: SearchRoute,
        favorites: FavoritesRoute,
        profile: ProfileRoute,
    });


    return (
        <>
            <ScrollView>
                <View style={{ paddingTop: 50, paddingLeft: 15 }}>
                    <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>
                        Compras urgentes
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Card style={{ width: 200, marginRight: 8 }}>
                            <Card.Cover source={{ uri: 'https://static.paodeacucar.com/img/uploads/1/893/612893.png' }} />
                            <Card.Content>
                                <Text variant="titleMedium">Arroz</Text>
                            </Card.Content>
                        </Card>
                        <Card style={{ width: 200, marginRight: 8 }}>
                            <Card.Cover source={{ uri: 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13906/small/acucar-refinado-uniao-1kg_75357.jpg' }} />
                            <Card.Content>
                                <Text variant="titleMedium">Açucar</Text>
                            </Card.Content>
                        </Card>
                        <Card style={{ width: 200, marginRight: 8 }}>
                            <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMcEaYL3H6CgfV7HEhh6YhjYdDcmDGYSKyg&s' }} />
                            <Card.Content>
                                <Text variant="titleMedium">Papel Higiênico</Text>
                            </Card.Content>
                        </Card>
                    </ScrollView>


                    <Card style={{ marginTop: 16, marginRight: 16  }}>
                        <Card.Content >
                            <Text variant="bodyLarge">Você fez compras?</Text>
                            <Button mode="contained" style={{ marginTop: 16 }}>Registre a nota fiscal aqui</Button>
                        </Card.Content>
                    </Card>

                    <Text variant="headlineLarge" style={{ marginTop: 30, marginBottom: 10, fontWeight: 'bold' }}>Contas</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ alignItems: 'center', marginRight: 16 }}>
                            <Avatar.Image size={64} source={{ uri: 'data:image/jpeg;base64,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' }} />
                            <Text>Adylla</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 16 }}>
                            <Avatar.Image size={64} source={{ uri: 'https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/457777738_18453187624044962_5027735136042787922_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFycIuj0dBjgejYZ2QakvE_1PRjh86kNE_U9GOHzqQ0T3VulEJO_HHY5i0JzTtFDSCaxN3Ko2nkt9FRHvamSQ3D&_nc_ohc=OsdZqJf_G4MQ7kNvgGv7IPG&_nc_ht=scontent-gru1-2.xx&_nc_gid=AErqeR-o5Y3St5GfDrSZTzH&oh=00_AYDSVFqyAxG9xRnh47Vc6FMSbz57aL5luiVUIKnW8GesvQ&oe=6702CA2C' }} />
                            <Text>Carol</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 16 }}>
                            <Avatar.Image size={64} source={{ uri: 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/450930838_7472535289518019_1311902053635053173_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEeESsH5afjG70UyeElrthJL_d6BH_Ym-kv93oEf9ib6Y7zuldYBtIP_14A3XDbNt9cqTsdtc83jEU25dqSXA6j&_nc_ohc=0Jm2Lsd9nRMQ7kNvgF5fSoO&_nc_ht=scontent-gru1-1.xx&_nc_gid=A_CAnkntx0W9RAY8IRlWu2j&oh=00_AYBX6nd7mgfH0QNJPqJjUQMOfzHxc7K5nY79Ta9b8BjIKQ&oe=6702A719' }} />
                            <Text>Andressa</Text>
                        </View>
                        
                    </ScrollView>

                </View>
            </ScrollView>

        <BottomNavigation 
            navigationState={{ index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
        </>
    );
};

const HomeRoute = () => <Text> Início</Text>;
const SearchRoute = () => <Text>Buscar</Text>;
const FavoritesRoute = () => <Text>Favoritos</Text>;
const ProfileRoute = () => <Text>Perfil</Text>;

export default HomeScreen;