let summoners = [
  {
    name: 'Aphelios',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/aphelios-edg.jpg'
  },
  {
    name: 'Ashe',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/ashe-ocean-song.jpg'
  },
  {
    name: 'Belveth',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/belveth-battle-boss.jpg'
  },
  {
    name: 'Caitlyn',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/caitlyn-snow-moon.jpg'
  },
  {
    name: 'Graves',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/graves-edg.jpg'
  },
  {
    name: 'Illaoi',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/illaoi-snow-moon.jpg'
  },
  {
    name: 'Katarina',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/katarina-high-noon.jpg'
  },
  {
    name: 'Kayn',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/kayn-snow-moon.jpg'
  },
  {
    name: 'Leona',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/leona-high-noon.jpg'
  },
  {
    name: 'Mordekaiser',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/mordekaiser-high-noon.jpg'
  },
  {
    name: 'Nidalle',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/nidalee-ocean-song.jpg'
  },
  {
    name: 'Pantheon',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/pantheon-ashen-knight.jpg'
  },
  {
    name: 'Samira',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/samira-high-noon.jpg'
  },
  {
    name: 'yone',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/yone-ocean-song.jpg'
  },
  {
    name: 'yuumi',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/yuumi-edg.jpg'
  },
  {
    name: 'zeri',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/zeri-ocean-song.jpg'
  },
  {
    name: 'zoe',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/zoe-edg.jpg'
  },
  {
    name: 'viktor',
    skin: 'https://www.mobafire.com/images/champion/skins/portrait/viktor-high-noon.jpg'
  }
]
let div = document.querySelector('.images')

for (let i = 0; i <= summoners.length; i++) {
  let image = document.createElement('img')
  image.src += summoners[i].skin
  div.appendChild(image)
}
