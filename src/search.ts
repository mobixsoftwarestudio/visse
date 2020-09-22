export default (array: Array<{ key: string; value: any }> = []) => {
  return {
    $or: array.map((item) => ({ [item.key]: { $regex: item.value, $options: 'i' } })),
  };
};
