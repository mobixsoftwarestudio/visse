export default (array: Array<{ key: string; value: any }> = []) => {
  if (array.length === 0) {
    return {};
  }
  return {
    $or: array.map((item) => ({ [item.key]: { $regex: item.value, $options: 'i' } })),
  };
};
