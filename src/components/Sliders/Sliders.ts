import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Sliders',
    setup() {
        const nextSlide = () => {
            const scrollSnap = document.querySelector('.scroll-snap');
            const scrollSlide = document.querySelectorAll('.slide');
            for (let index = 0; index < scrollSlide.length; index++) {
                var slide = scrollSlide[index];
            }
            scrollSnap!.scrollLeft += slide!.scrollWidth;
            console.log(scrollSnap!.scrollLeft += slide!.scrollWidth)
        }

        const previewsSlide = () => {
            const scrollSnap = document.querySelector('.scroll-snap');
            const scrollSlide = document.querySelectorAll('.slide');
            for (let index = 0; index < scrollSlide.length; index++) {
                var slide = scrollSlide[index];
            }
            scrollSnap!.scrollLeft -= slide!.scrollWidth;
            console.log(scrollSnap!.scrollLeft -= slide!.scrollWidth)
        }

        return {
            nextSlide,
            previewsSlide
        }
    }
})
