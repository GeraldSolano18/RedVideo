import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';//url que se usa de base para imagen
  const formatEmail = (email).trim().toLowerCase();//convertir el correo que se recibe como parametro sin espacios y todo en minuscuslas
  const hash = md5(formatEmail, { encoding: "binary" });
  return `${base}${hash}`;//Union de la base con el hash

};
export default gravatar;
