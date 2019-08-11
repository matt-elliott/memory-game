export default {
  processImages: function(images) {
    const dataString = JSON.stringify(images);
    const expireDate = new Date('08/10/20').toUTCString();
    const now = new Date().toUTCString();
    let localData = localStorage.getItem('memory-game-images');
    const localExpire = localStorage.getItem('memory-game-die');

    if(localData === null) {
      localStorage.setItem('memory-game-images', dataString);
      localStorage.setItem('memory-game-die', expireDate);
      localData = localStorage.getItem('memory-game-images');
    } else {
      //dont set string and check if we should delete
      if(localExpire === now) {
        localStorage.removeItem('memory-game-images');
      }
    }

    return JSON.stringify(localData);
  }
}