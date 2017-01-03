/**
 * Created by chiamaka on 1/2/17.
 */
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['The', 'A', 'An'];
const bandsList = document.getElementById('bands');

const bandsWithout = bands.map(function (band) {
    articles.forEach(function (article) {
        if (band.includes(article)) {
            const regex = new RegExp(`${article} `);
            band = band.replace(regex, '');
        }
    });
    return band;
});

const html = bandsWithout.map(band => {
    return `
        <li>${band}</li>
    `;
}).join('');

bandsList.innerHTML = html;

