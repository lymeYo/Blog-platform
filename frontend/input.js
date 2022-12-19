const fs = require('fs-extra')
const aliceSavesDirPath = './redux' //!
let savesFilePath = './wrappers' //!


fs.copy(aliceSavesDirPath, savesFilePath);