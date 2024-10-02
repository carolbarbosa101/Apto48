import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Card, Avatar, BottomNavigation } from 'react-native-paper';



const HomeScreen = () => {
    const { index, setIndex } = React.useState(0);
    const { routes } = React.useState([
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
                <View style={{ padding: 16 }}>
                    <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>
                        Hoje
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Card style={{ width: 200, marginRight: 8 }}>
                            <Card.Cover source={{ uri: 'https://link-to-image' }} />
                            <Card.Content>
                                <Text variant="titleMedium">Tem um mês que eu cheguei aqui</Text>
                            </Card.Content>
                        </Card>
                    </ScrollView>


                    <Text variant="headlineLarge" style={{ marginTop: 16, fontWeight: 'bold' }}>Destaques</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ alignItems: 'center', marginRight: 16 }}>
                            <Avatar.Image size={64} source={{ uri: 'https://link-to-avatar' }} />
                            <Text>Alexandre Abramo</Text>
                        </View>
                    </ScrollView>

                    <Card style={{ marginTop: 16 }}>
                        <Card.Content>
                            <Text variant="bodyLarge">Você tem o que dizer?</Text>
                            <Text variant="bodyMedium">Então diga com a Pingback.</Text>
                            <Button mode="contained">Comece Grátis!</Button>
                        </Card.Content>
                    </Card>
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