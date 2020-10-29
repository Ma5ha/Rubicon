const textClip = (string: string, clipAt: number) => {
  if (string.length > clipAt) {
    return string.slice(0, clipAt) + "...";
  }
  return string;
};

export default textClip;
