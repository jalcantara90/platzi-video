function leftPad(number) {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
  }
  
  function formattedTime(secs) {
    const minutes = parseInt(secs / 60, 10);  // con esta operación podemos sacar el resultado de los minutos
    const seconds = parseInt(secs % 60, 10); // con esta operación podemos sacar el resultado de los segundos
    return `${minutes}:${leftPad(seconds.toString())}`
  }

export default formattedTime;