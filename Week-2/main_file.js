//Simple calculator code
function addition()
{
    var a = Number(document.calc.number1.value);
    var b = Number(document.calc.number2.value);
    document.getElementById("calresult").innerHTML = "Value after addition is " + (a+b)
    return false;
}
function subtraction()
{
    var a = Number(document.calc.number1.value);
    var b = Number(document.calc.number2.value);
    document.getElementById("calresult").innerHTML = "Value after subtraction is " + (a-b)
    return false;
}
function multiplication()
{
    var a = Number(document.calc.number1.value);
    var b = Number(document.calc.number2.value);
    document.getElementById("calresult").innerHTML = "Value after multiplication is " + (a*b)
    return false;
}
function division()
{
    var a = Number(document.calc.number1.value);
    var b = Number(document.calc.number2.value);
    document.getElementById("calresult").innerHTML = "Value after division is " + (a/b)
    return false;
}
function percentage()
{
    var a = Number(document.calc.number1.value);
    var b = Number(document.calc.number2.value);
    document.getElementById("calresult").innerHTML = a+"% of"+b+" = " + ((a*b)/100)
    return false;
}
function sqrt()
{
    var a = Number(document.calc.number1.value);
    if(a<0)
    {
        document.getElementById("calresult").innerHTML = "Enter only positive numbers"
    return false;
    }
    var tem = Math.sqrt(a)
    if(tem % 1 === 0)
    {
        document.getElementById("calresult").innerHTML = "Square root of "+a+" is: " + tem
    return false;
    }
    else{
        document.getElementById("calresult").innerHTML = "Square root of "+a+" is: " + tem.toFixed(3)
    return false;
    }
}
function abs()
{
    var a = Number(document.calc.number1.value);
    document.getElementById("calresult").innerHTML = "Absolute value of "+a+ " is: " + Math.abs(a)
    return false;
}



//Form validation code
function validate(form) {
    var rname = /^[a-zA-Z]+$/gi
    var rnum = /^[0-9]+$/gi
    var err_list = []

    var name = form.name.value;
    var num = form.number.value;

    if(!rname.test(name)){
        alert("Please enter a valid name.");
        return false;
    }
    if(!rnum.test(num))
    {
        alert("Only numbers are allowed.");
        return false;
    }
    else{
        if(num.length != 10){
            alert("Must contain 10 digits.");
            return false;
        }
    }
    document.write("<h2>Sucessful submission. Thank you!</h2>");
    
}


//Palindrome checker
function palindrome() {
    var str = document.palform.str.value;
    var strrev = str.split('').reverse().join('')
    if(str === strrev) {
        
        return true;
    }
    else {
        
        return false;
    }
}

//Anagram checker
function anagram() {
    var string_value = document.anaform.string.value;
    var word_value = document.anaform.word.value;

    var temp1 = string_value.replace(/[^\w]/g, '').toLowerCase();
    var temp2 = word_value.replace(/[^\w]/g, '').toLowerCase();
    if(sortAna(temp1) === sortAna(temp2)){

        return true;
        
    }
    else{
        
        return false;
        
    }
}
function sortAna(string) {
    return string.split('').sort().join('')
}


//For task-4 code
function rand(iden) {
    x = document.getElementById(iden)
    x.value = Math.floor(Math.random() * 1001)
    return false
}

function survive() {
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);
    
    n1 = n1 % 3;
    n2 = n2 % 3;
    var dict = {};
    dict[0] = 'Human';
    dict[1] = 'Cockroach';
    dict[2] = 'Nuclear Bomb';
    if(dict[n1] == 'Human'){
        if(dict[n2] == 'Cockroach'){
            document.getElementById('surresult').innerHTML = "Human won!!!"
            return false
        }
        else if(dict[n2] == 'Nuclear Bomb')
        {
            document.getElementById('surresult').innerHTML = "Nuclear Bomb won!!!"
            return false
        }
        else
        {
            document.getElementById('surresult').innerHTML = "TIE!!!"
            return false
        }
    }
    else if(dict[n1] == 'Cockroach')
    {
        if(dict[n2] == 'Human'){
            document.getElementById('surresult').innerHTML = "Human won!!!"
            return false
        }
        else if(dict[n2] == 'Nuclear Bomb')
        {
            document.getElementById('surresult').innerHTML = "Cockroach won!!!"
            return false
        }
        else
        {
            document.getElementById('surresult').innerHTML = "TIE!!!"
            return false
        }   
    }
    else 
    {
        if(dict[n2] == 'Cockroach'){
            document.getElementById('surresult').innerHTML = "Cockroach won!!!"
            return false
        }
        else if(dict[n2] == 'Human')
        {
            document.getElementById('surresult').innerHTML = "Nuclear Bomb won!!!"
            return false
        }
        else
        {
            document.getElementById('surresult').innerHTML = "TIE!!!"
            return false
        }
    }
    
}