import Notiflix from 'notiflix';

const submitedForm = document.querySelector('.form');

submitedForm.addEventListener('submit', onSubmitForm)

function onSubmitForm(e){
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  let delay = Number(formData.get('delay'));
  const step = Number(formData.get('step'));
  const amount = Number(formData.get('amount'));

  for(let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step
  }
}

function createPromise(position, delay) {
  Notiflix.Notify.init({});
  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      } else {
        // Reject
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }
    }, delay);
  })



  
  
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
