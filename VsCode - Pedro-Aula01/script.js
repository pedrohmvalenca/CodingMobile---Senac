alert("bem vindo!")

async function getReceita(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    
    let data = await response.json();
    console.log("Objeto Inteiro");
    console.log(data);

    let meal = data.meals[0];
    console.log("Só a receita");
    console.log(meal);

    document.getElementById("receita").innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}">
    <p>${meal.strInstructions}</p>
    `
    
    
}