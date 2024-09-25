// Function to compute a² - b² using the formula (a - b)(a + b)
function calculateDifferenceOfSquares() {
    // Get values from input fields
    let a = parseFloat(document.getElementById("a").value) || 0;
    let b = parseFloat(document.getElementById("b").value) || 0;

    // Calculate difference and sum
    let difference = a - b;
    let sum = a + b;

    // Calculate the result (a² - b² = (a - b)(a + b))
    let result = difference * sum;

    // Display the results
    document.getElementById("difference").innerHTML = "The Difference (a - b) is: " + difference;
    document.getElementById("sum").innerHTML = "The Sum (a + b) is: " + sum;
    document.getElementById("result").innerHTML = `<h3>The result of ${a}² - ${b}² is: ${result}.</h3>`;
}
