export function imegeXXXX(imeges) {
  return imeges.map(imege => {
    return {
      public_id: imege.public_id,
      secure_url: imege.secure_url
    };
  });
}
