function subjectfunction() {
    const subjectValue1 =  document.querySelector("#subject1");
    const subjectValue2 =  document.querySelector("#subject2");
    const subjectValue3 =  document.querySelector("#subject3");
    const subjectValue4 =  document.querySelector("#subject4");
    const subjectValue5 =  document.querySelector("#subject5");
    const subjectValue6 =  document.querySelector("#subject6");
    const subjectValue7 =  document.querySelector("#subject7");

    const heading1 = document.querySelector('#heading1');

    const subVal1 = parseFloat(subjectValue1.value); // Convert to number
    const subVal2 = parseFloat(subjectValue2.value); // Convert to number
    const subVal3 = parseFloat(subjectValue3.value); // Convert to number
    const subVal4 = parseFloat(subjectValue4.value); // Convert to number
    const subVal5 = parseFloat(subjectValue5.value); // Convert to number
    const subVal6 = parseFloat(subjectValue6.value); // Convert to number
    const subVal7 = parseFloat(subjectValue7.value); // Convert to number


    const sum = (subVal1 + subVal2 + subVal3 + subVal4 + subVal5 + subVal6 + subVal7) / 7; // Calculate sum and division
    const roundedResult = Math.round(sum * 1000) / 1000; // Round to 3 decimal places

    const resultString = roundedResult.toFixed(2); // Convert to string with 3 decimal places
    heading1.innerHTML = resultString; // Display result
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', subjectfunction);
