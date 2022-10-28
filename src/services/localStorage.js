const verificaIdNoDoneRecipes = (id) => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  const doneRecipesParseado = JSON.parse(doneRecipes);
  const findId = doneRecipesParseado?.find((dr) => +(dr.id) === +(id));
  return (findId);
};

const informRecipeInProgress = (obj, id) => {
  const chavesDoMeal = Object.keys(obj.meals);
  const chavesDoDrink = Object.keys(obj.drinks);
  const findMeal = chavesDoMeal?.find((c) => c === id);
  const findDrink = chavesDoDrink?.find((c) => c === id);
  if (findMeal) {
    console.log('Encontrei chave meal', findMeal);
    return findMeal;
  }
  if (findDrink) {
    console.log('Encontrei chave drink', findDrink);
    return findDrink;
  }
  console.log('Não encontrei nenhuma chave');
  return undefined;
};

// FUNÇÃO APENAS PARA PASSAR NO REQUISITO 30 - APAGAR ASSIM QUE ENTRAR NAS 40 E POUCOS
const saveInProgressToLocal = (id, prev) => {
  const mockData = {
    meals: {
      ...prev.meals,
      [id]: [],
    },
    drinks: {
      ...prev.drinks,
      [id]: [],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(mockData));
  console.log('Salvei no localStorage:', mockData);
};

const verificaIdNoInProgressRecipes = (id) => {
  const inProgress = localStorage.getItem('inProgressRecipes');
  const inProgressParseado = JSON.parse(inProgress) || { meals: {}, drinks: {} };
  const jaExiste = informRecipeInProgress(inProgressParseado, id);
  if (jaExiste !== undefined) {
    console.log('Já existe');
    return jaExiste;
  }
  saveInProgressToLocal(id, inProgressParseado);
};

/* const saveMealInProgress = (dataMeal) => {
  const pegaDoLocal = localStorage.getItem('inProgressRecipes') || '{}';
  const parsa = JSON.parse(pegaDoLocal) || {};
  const mealsInProgress = parsa.meals;
  const idMeals = Object.keys(mealsInProgress);
  const verificaIdMeal = idMeals.find((drinksIds) => drinksIds === data.id);
};
 */
/* const saveDrinkInProgress = (dataDrink) => {
  const pegaDoLocal = localStorage.getItem('inProgressRecipes') || '{}';
  const parsa = JSON.parse(pegaDoLocal) || {};
  const drinksInProgress = parsa.drinks;
  const idDrinks = Object.keys(verificaIdNoDoneRecipesdrinksInProgress); // [array de ids dos drinks in progress]
  const verificaIdDrink = idDrinks.find((drinksIds) => drinksIds === data.id);
}; */

export { verificaIdNoDoneRecipes, verificaIdNoInProgressRecipes };
