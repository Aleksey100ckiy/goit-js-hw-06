const counterEl = document.querySelectorAll('#counter button');
    const decremBtn = counterEl[0];
    const incremBtn = counterEl[1];

    let valueEl = document.querySelector('#value');

    decremBtn.addEventListener('click', function() {
        // console.log(`робить -`);
        counterValue.decrement();
        valueEl.textContent = counterValue.value;
    });

    incremBtn.addEventListener('click', function() {
        // console.log('робить +');
        counterValue.increment();
        valueEl.textContent = counterValue.value;
    });


const counterValue ={
 value: 0,
 increment(){
    this.value += 1;
 },
 decrement(){
    this.value -= 1;
 },
};

