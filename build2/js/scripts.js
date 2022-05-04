// Custom Scripts
function stepForm() {
    const steps = document.querySelectorAll('.form__step')
    const prevBtn = document.querySelector('.prev__step')
    const nextBtn = document.querySelector('.next__step')
    const form = document.querySelector('.steps__form')
    const stepNumbers = document.querySelectorAll('.steps__number')
    const progress = document.querySelector('.progress_success')
    const finishBlock = document.querySelector('.finish')

    form.addEventListener('submit', (e) => e.preventDefault())

    let formStep = 0;
    
    prevBtn.addEventListener('click', () => {
        formStep--

        stepNumbers[formStep + 1].classList.remove('active__number')

        update()
    })
    nextBtn.addEventListener('click', () => {
        if(formStep < steps.length - 1) {
            formStep++
            update()
        }
    })

    function update() {
        steps.forEach((step) =>{
            step.classList.contains('active') && step.classList.remove('active')
        })
        steps[formStep].classList.add('active')
        stepNumbers[formStep].classList.add('active__number')

        if(formStep === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if(formStep === steps.length - 1){
            nextBtn.innerHTML = 'Finish'
            nextBtn.addEventListener('click', () =>{
                finishBlock.style.display = 'block'
                form.style.display = 'none'
            })
        } else {
            nextBtn.innerHTML = 'Next'
        }


        const actives = document.querySelectorAll('.active__number')
        const percent  = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + '%'

        progress.style.width = percent
    }

    update()
}
if(document.querySelector('.steps__form')){
    stepForm()
}

