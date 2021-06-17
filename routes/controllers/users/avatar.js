const jimp = require('jimp');
const path = require('path');
const fs = require('fs').promises;
const { users: service } = require('../../../services');

const avatar = async (req, res, next) => {
  try {
    const id = req.user._id;

    if (req.file) {
      const { path: tempPath, originalname } = req.file;

      const randomData = new Date();

      const creationImg = `${randomData.getFullYear()}-${
        randomData.getMonth() + 1
      }-${randomData.getDay()}-${randomData.getHours()}`;

      const [name, expanse] = originalname.split('.');

      const newNameImg = `${name}_${creationImg}.${expanse}`;

      const uploadedDir = path.join(__dirname, '../../../public', 'avatars');
      const img = await jimp.read(tempPath);
      await img
        .autocrop()
        .cover(
          250,
          250,
          jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE,
        )
        .writeAsync(tempPath);
      const uploadDir = path.join(uploadedDir, newNameImg);
      await fs.rename(tempPath, uploadDir);

      const url = await service.updateAvatar(id, uploadDir);

      res.status(201).json({
        status: 'success',
        code: 201,
        data: {
          avatarURL: url,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = avatar;
