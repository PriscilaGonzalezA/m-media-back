const fs = require('fs');

const rmImage = (path) => {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}

exports.rmImage = rmImage;