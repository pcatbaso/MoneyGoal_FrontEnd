export interface UsuarioI{
  // text: string;
  // id_usuario?: string;
  // nombre_usuario: string;
  // apellidoPaterno_usuario: string;
  // apellidoMaterno_usuario: string;
  // direccion_usuario: string;
  // email_usuario: string;
  // telefono_usuario: string;
  // contrasenia_usuario: string;
  // fechaCreacion_usuario?: string;
  // fechaActualizacion_usuario?: string;
  // activo?: string;

  text: string;
  id: number;
  nombre_usuario: string;
  apellidoPaterno_usuario: string;
  apellidoMaterno_usuario: string;
  direccion_usuario: string;
  email_usuario: string;
  telefono_usuario: string;
  contrasenia_usuario: string;
  cardName: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
  termino1: boolean;
  termino2: boolean;
  activo: boolean;
  rol: number;
  user_created: string;
}
