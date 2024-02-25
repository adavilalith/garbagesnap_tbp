import { mappls, mappls_plugin} from  'mappls-web-maps';
import { useEffect } from 'react';
import { useState } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import axios from 'axios';

function  CurrentLocMap(props) {
const  styleMap  = {width:  '70%', height:  '20rem', display:'inline-block',backgroundColor:'#dadada'}
const  mapProps  = { center: [28.6330, 77.2194], traffic:  false, zoom:  18, geolocation:  false, clickableIcons:  false }
var mapObject;
var markerObject;
var mapplsClassObject=  new  mappls();
var mapplsPluginObject =  new  mappls_plugin();

	const [address,setAddress]=useState("")
    const [location,setLocation]=props.loc
    const getGeolocation = ()=>{   
        if(location!=""){return;} 
        if(navigator.geolocation){
            navigator.geolocation.watchPosition((position)=>{
                if(location==""){
                setLocation([position.coords.latitude,position.coords.longitude]);
                }
                else{
                    console.log(3)
                }
            },(err)=>console.log(err))
        }
        else{
            console.log("no loc access")
        }
    }
    useEffect(()=>mapinit,[location])
    const mapinit=()=>{
        if(address){return}

        if(!location){return;}
        mapProps.center=location
        mapplsClassObject.initialize("aa664b33-578f-4657-9f4a-4221b8c507e4",()=>{
            mapObject = mapplsClassObject.Map({id:  "map",properties: mapProps});
        })

        

        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://apis.mappls.com/advancedmaps/v1/a060aaedb17145dca14270d639ba8a9b/rev_geocode?lat=${location[0]}&lng= ${location[1]}`,
        headers: { }
        };
        axios.request(config)
        .then((response) => {
        setAddress(response.data.results[0].formatted_address);
        })
        .catch((error) => {
        console.log(error);
        });

    }

return (
    <>
            <Row className='mt-5 d-flex justify-content-center align-items-center text-center'>
                <div  id="map"  style={styleMap}></div>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center align-items-center text-center my-3'>
                    <Button className='btn-dark' onClick={getGeolocation}>Get Geolocation</Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center align-items-center text-center'>
                    <p>{(location.length)?(address)?address:location:"Enable Location Access"}</p>
                </Col>              
            </Row>
    </>
);
}
export  default  CurrentLocMap;