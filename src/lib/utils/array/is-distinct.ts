export const isDistinct = <T>(
  collection: Array<T> | null | undefined
): boolean => {
  if (!collection) {
    return true;
  }

  const unique = Array.from(new Set(collection));

  return unique.length === collection.length;
};
