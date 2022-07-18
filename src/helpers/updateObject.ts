const updateObject = (oldObject: object, updatedValues: object) => ({
  ...oldObject,
  ...updatedValues,
});

export default updateObject;
