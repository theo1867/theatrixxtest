import {setStatic, renewDynamic, setMulticast, Configuration} from './ts-NetManager/src/network-manager'
const config: Configuration = {
    address: "172.16.25.125",
    netmask: "255.255.255.224",
    defGateway: "192.168.2.254",
}

setStatic("wlp0s20f3", config).then(
    function(){},
    function(){},
);

// renewDynamic("wlp0s20f3").then(
//     function(){},
//     function(){},
// );

// setMulticast("wlp0s20f3").then(
//     function(){},
//     function(){},
// );