const multer = require('multer');

module.exports = multer({

    storage: multer.diskStorage({}),
    fileFiter: (req,file,cb)=>{

      if(file.mimetype.match(/jpg|jpeg|png|gif$i/)){
            cb(new Error('Unsupported file type'),false);
            return;
      }
      cb(null,true);
    },
})