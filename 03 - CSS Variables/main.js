/**
 * Created by chiamaka on 12/14/16.
 */
"use strict";
if (navigator.onLine !== true) {
    document.querySelector('.status').style.display = 'block';
    document.images[0].src = '';
}
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));