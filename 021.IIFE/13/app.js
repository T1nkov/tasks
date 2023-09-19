// Напишите функцию, генерирующую пароль из 8 символов с использованием
// замыкния. (Math.random)

function getPass (){
  let pwd = ''
  return function (){
    pwd += Math.round(Math.random() * 9)
    console.log(pwd);
  }
}

const pass = getPass()



pass()
pass()
pass()
pass()
pass()
pass()
pass()
pass()

