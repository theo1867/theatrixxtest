export declare function sayHello(): void;
export declare function sayGoodbye(): void;
export declare function setStatic(iface: string, conf: Configuration): Promise<void>;
export interface Configuration {
    address: string;
    netmask: string;
    defGateway: string;
}
