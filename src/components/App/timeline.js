import { gsap } from 'gsap';

export const enterRoute = (node, location) => {
    node.style.display = 'none';
    setTimeout(() => node.style.display = 'block', 300);
}

export const exitRoute = (node, location) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('Wrapper');
    document.body.appendChild(wrapper); 

    gsap.from('.Wrapper', { x: '-100%', duration: 1, onComplete: () => document.body.removeChild(wrapper) })
}