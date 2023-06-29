let sizes = document.querySelectorAll('.size');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));

// working on colors and image slider

let colors = document.querySelectorAll('.color'),
    shoes = document.querySelectorAll('.shoe'),
    gradients = document.querySelectorAll('.gradient');


let prevColor = "orange";

function changeColor(){
    let primary = this.getAttribute('primary');

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    // change color and shoe even gradient background

    document.documentElement.style.setProperty('--primary', primary);

    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);

    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector( `.gradient[color="${color}"]`);

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
}

colors.forEach(c => c.addEventListener('click', changeColor));