import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  const countries = [
    {country: 'English', code: '93', iso: 'AF'},
    {country: 'Hindi', code: '355', iso: 'AL'},
    {country: 'Marathi', code: '213', iso: 'DZ'},
    {country: 'Gujarati', code: '1-684', iso: 'AS'},
    {country: 'Tamil', code: '376', iso: 'AD'},
    {country: 'Bengali'},
  ];
  const Dropdown_Status_Design = () => {
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState('');
    const searchRef = useRef();
    const onSearch = search => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(countries);
      }
    };
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 40,
            borderRadius: 10,
            // borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // paddingLeft: 15,
            // paddingRight: 15,
            backgroundColor:'#346002',
            // marginLeft:54,
            
          }}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{fontWeight:'600',color:'#ffffff',textAlign:'center',paddingLeft:50}}>
            {selectedCountry == '' ? 'Select Language' : selectedCountry}
          </Text>
          {/* {clicked ? (
            <Image
              source={require('./upload.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('./dropdown.png')}
              style={{width: 20, height: 20}}
            />
          )} */}
        </TouchableOpacity>
        {clicked ? (
          <View
            style={{
              elevation: 5,
              marginTop: 20,
              height: 300,
              alignSelf: 'center',
              width: '100%',
              backgroundColor: '#346002',
              borderRadius: 10,
              marginRight:200,
            //   alignItems:'center',
            }}>
            <TextInput
              placeholder="Search.."
              value={search}
              ref={searchRef}
              onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={{
                width: '65%',
                height: 20,
                alignSelf: 'center',
                borderWidth: 0.2,
                borderColor: '#8e8e8e',
                borderRadius: 7,
                marginTop: 20,
                // paddingLeft: 20,
                color:'#ffffff'
              }}
            />
  
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      borderBottomWidth: 0.5,
                      borderColor: '#8e8e8e',
                    }}
                    onPress={() => {
                      setSelectedCountry(item.country);
                      setClicked(!clicked);
                      onSearch('');
                      setSearch('');
                    }}>
                    <Text style={{fontWeight: '600',color:'#ffffff',paddingLeft:50}}>{item.country}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };
  
  export default Dropdown_Status_Design;