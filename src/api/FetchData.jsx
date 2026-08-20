import plant1 from '../assets/plant.png'
import plant2 from '../assets/plant.png'
import plant3 from '../assets/plant.png'
const api = "https://6a4b41e2f5eab0bb6b6275e5.mockapi.io/info"

export async function FetchData(){
    const response = await fetch(api);
    const data = response.json();
    return data;
}

export default [
    {
        id: 1,
        name: "Barberton Daisy",
        price: 119,
        image: plant1,
    },
    {
        id: 2,
        name: "Angel Wing Begonia",
        price: 169,
        image: plant2,
    },
    {
        id: 3,
        name: "African Violet",
        price: 199,
        image: plant3,
    },
    {
        id: 1,
        name: "Barberton Daisy",
        price: 119,
        image: plant1,
    },
    {
        id: 2,
        name: "Angel Wing Begonia",
        price: 169,
        image: plant2,
    },
    {
        id: 3,
        name: "African Violet",
        price: 199,
        image: plant3,
    },
    {
        id: 1,
        name: "Barberton Daisy",
        price: 119,
        image: plant1,
    },
    {
        id: 2,
        name: "Angel Wing Begonia",
        price: 169,
        image: plant2,
    },
    {
        id: 3,
        name: "African Violet",
        price: 199,
        image: plant3,
    }
]
