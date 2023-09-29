export const selectMyPetName = state => state.addPet.name;
export const selectMyPetLocation = state => state.addPet.location;
export const selectMyPetImage = state => state.addPet.file;
export const selectMyPetType = state => state.addPet.type;
export const selectMyPetBirthDate = state => state.addPet.date;
export const selectMyPetGender = state => state.addPet.sex;
export const selectMyPetTitle = state => state.addPet.title;
export const selectMyPetStatus = state => state.addPet.category;
export const selectMyPetComments = state => state.addPet.comments;

export const selectMyPet = state => state.addPet;
