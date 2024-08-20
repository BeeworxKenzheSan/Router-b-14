const initialState = {
  materials: [
    { name: "Material 1", id: 103 },
    { name: "Material 2", id: 104 },
  ],
};

export const materialReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CREATE":
      return { ...state, materials: [...state.materials, action.payload] };
    case "UPDATE": {
      const existingMaterial = state.materials.find((item) => {
        return item.id === action.payload.id;
      });
      const updateMaterials = state.materials.map((item) => {
        if (item.id === existingMaterial.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return { ...state, materials: updateMaterials };
    }
  }
  return state;
};
