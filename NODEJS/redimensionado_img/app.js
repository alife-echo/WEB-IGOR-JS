const sharp = require('sharp')
const compress_Images = require('compress-images')
let path = process.argv[2]
let width = Number(process.argv[3])
//let new_Name_Img = process.argv[4]
let direction = process.argv[4]

function resize(path, out_Put_Path, width) {
  sharp(path)
    .resize({ width: width })
    .toFile(out_Put_Path, error => {
      if (error) {
        console.log(error)
      } else {
        console.log('Imagem redimensionada com sucesso')
        if (direction == '') {
          direction = './compressed/'
        } else {
          compress(out_Put_Path, direction)
        }
      }
    })
}
function compress(path_Input, output_Path) {
  compress_Images(
    path_Input,
    output_Path,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    {
      gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] }
    },
    function (error, completed, statistic) {
      console.log('-------------')
      console.log(error)
      console.log(completed)
      console.log(statistic)

      console.log('-------------')
    }
  )
}

resize(path, './temp/outputSize.jpg', width)
