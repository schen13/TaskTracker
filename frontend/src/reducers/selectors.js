export const selectUserGroups = (groupIds, groups) => {
  const selectedGroups = [];
  groupIds.forEach(groupId => {
    selectedGroups.push(groups[groupId]);
  });
  return selectedGroups;
};