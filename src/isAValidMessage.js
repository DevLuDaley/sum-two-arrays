    //h important note
    //+ standard note
    //! heading note
    //m this is a misc note

//h Remember to use the containers that are available to you. put things into containers to process them

function isAValidMessage(message){
  // your code
  const str = message.split(/[0-9]/g).filter((elm) => elm !== '');
  const num = message.split(/[a-zA-Z]/g).filter((elm) => elm !== '');
  let result;

  if (message === "") {
    return true;
  }
  
  if (/\s/.test(message)) {
    return false;
  }
  
  if (/[a-zA-Z]/.test(message[0])) {
    return false;
  }
  
  const mathMin = Math.min(num.length, num.length);
  for (let i = 0; i < mathMin; i += 1) {
    if (
      // str[i].length == 'undefined' || 
    str[i].length !== +num[i]
      || num.length !== str.length
      ) {
      // console.log('str[i]=> ', str[i]);
      // console.log('str[i].length=> ', str[i].length);
      // console.log('str[i].length=> +num[i] ', str[i].length, +num[i]);
      // console.log('num=> ', num);
      // console.log('+num[i]=> ', +num[i]);
      // console.log('num.length=> ', num.length);
      // console.log('str.length=> ', str.length);
      result = false;
      return result;
  } else {
      // console.log('str[i]=> ', str[i]);
      // console.log('str[i].length=> ', str[i].length);
      // console.log('str[i].length=> +num[i] ', str[i].length, +num[i]);
      // console.log('num=> ', num);
      // console.log('+num[i]=> ', +num[i]);
      // console.log('num.length=> ', num.length);
      // console.log('str.length=> ', str.length);
      result = true;
    }
  }
  // console.log(message)
  // console.log('result=> ', result)
  return result;
}

export default isAValidMessage;