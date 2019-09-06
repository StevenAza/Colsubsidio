import { Cuenta } from '../mocks/cuenta.model';

class Cliente {
    nombre: string;
    direccion: string;
    telefono: number;
    cuenta: Array<Cuenta>
    constructor(){
    }
}
    export const Clientes: Array<Cliente> = [
    {nombre: "Nelson Steven Aza Amado",
    direccion:"Cra 34 # 20 a 46",
    telefono:3107973757, 
    cuenta:
    [
    {numero: 1234, saldo:20000000},
    {numero: 4200, saldo:40000}
    ]
     }
]


