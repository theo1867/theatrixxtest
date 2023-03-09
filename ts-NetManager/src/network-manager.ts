const { exec } = require("child_process");
/* Sets the specified interface to static configuration */
export function setStatic(iface: string, conf: Configuration): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`sudo ifconfig ${iface} ${conf.address} netmask ${conf.netmask} && sudo ip route add default via ${conf.defGateway} dev ${iface} && sudo ifup ${iface}`, (error:string) => {
      if (error) {
        console.log('Cannot set this interface with these configurations');
        reject(error);
      }
      resolve();
    });
  });
}

/* Set interface to dynamic configuration */
export function renewDynamic(iface: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`sudo dhclient && sudo ifup ${iface}`, (error:string) => {
      if (error) {
        console.log('Interface not found');
        reject(error);
      }
      resolve();
    });
  });
}

/* Define which interface should be used for multicasting */
export function setMulticast(iface: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`sudo ifconfig ${iface} multicast`, (error:string) => {
      if (error) {
        console.log('Interface not found');
        reject(error);
      }
      resolve();
    });
  });
}


export interface Configuration {
  address: string;
  netmask: string;
  defGateway: string;
}

