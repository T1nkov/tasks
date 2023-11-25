// Посчитать количество гласных и согласных в строке. Реализовать Html: input,
// button, div (для отображения результата подсчета)


class Vowels {

  getClick(){
    const btn = document.querySelector('button')
    const input = document.querySelector('input')
    const div = document.querySelector('div')
    const vowels = ['a',' e', 'i', 'o', 'u']
    btn.addEventListener('click', ()=>{
      try {
        if(!input.value) throw new Error ('input is empty')
        const str = input.value.split('')
        let count = 0
        for (let i = 0; i < str.length; i++) {
          if(vowels.includes(str[i])) count++
        }

        const sog = input.value.length - count
        div.innerHTML = `${count} гласных, ${sog} гласных` 
        
      } catch (error) {
        div.innerHTML = error.message
      }
    })
  }
}


const vowels = new Vowels()

vowels.getClick()