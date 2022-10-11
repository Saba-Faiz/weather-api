import { View, Image, Text, AsyncStorage } from "react-native";
import React, { useEffect, useState } from 'react'

import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([])
    // const [Loading , setLoading] = usestate(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {

        try {
            const weather = await fetch('http://api.weatherapi.com/v1/current.json?key=ad3ff9bd1c2a423eb2e172707221909&q=Paris')
            const result = await weather.json()
            setData(result.location)
            console.log(result)
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{fontSize : 28,padding : 18}}>Name: {data.name}</Text>
            <Text style={{fontSize : 28,padding : 4}}>Region : {data.region}</Text>
            <Text style={{fontSize : 28,padding : 4}}>Country : {data.country}</Text>
            <Text style={{fontSize : 28,padding : 4}}>Latitude : {data.lat}</Text>
            <Text style={{fontSize : 28,padding : 4}}>Longitude : {data.lon}</Text>
        </View>

    )
}



export default Main;

