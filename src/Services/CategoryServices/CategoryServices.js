let mockCategories = [
  { id: 1, name: "Kategorija 1" },
  { id: 2, name: "Kategorija 2" },
];
const categoryServices = {
  getAllCategories: () => {
    return new Promise((resolve, reject) => {
      resolve(
        mockCategories.map((category) => ({
          id: category.id,
          name: category.name,
        }))
      );
    });
  },
};

export default categoryServices;
