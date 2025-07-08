export async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
    } else {
      navigator.geolocation.getCurrentPosition(
        pos => resolve(pos.coords),
        err => reject(err)
      );
    }
  });
}
