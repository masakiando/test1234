export function PostData(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(`/${type}/`, {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
