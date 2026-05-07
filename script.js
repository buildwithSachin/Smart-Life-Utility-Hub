function show(id, btn) {
  document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  if(btn) btn.classList.add("active");

  const img = document.getElementById("banner");

  if (id === "bmi")
    img.src = "https://mediclinic.scene7.com/is/image/mediclinic/BMI:1-1?_ck=1616194881712&wid=525&hei=525&dpr=off";
  else if (id === "interest")
    img.src = "https://img.freepik.com/premium-photo/business-concepttext-interest-rates-with-compassglassesbanknote-blur-calculator-brown-wooden-background_406607-4945.jpg"; // fixed
  else if (id === "age")
    img.src = "https://as2.ftcdn.net/jpg/02/67/83/03/1000_F_267830347_XYaOxKd61vpGvHiCr8uxLhv0RFGfNI2l.jpg";
  else
    img.src = "https://thegradecalculators.com/wp-content/uploads/2026/03/Test-Grade-Calculator.png";
}

/* BMI with category */
function bmi() {
  let h = document.getElementById("h").value / 100;
  let w = document.getElementById("w").value;

  if (!h || !w) return alert("Enter values");
  if (h<0 || w<0) return alert("Enter valid values");

  let b = (w / (h * h)).toFixed(2);

  let category = "";
  if (b < 18.5) category = "Underweight";
  else if (b < 25) category = "Normal";
  else if (b < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("bmiRes").innerText =
    `BMI: ${b} (${category})`;
}

/* Interest */
function interest() {
  let p = +document.getElementById("p").value;
  let r = +document.getElementById("r").value;
  let t = +document.getElementById("t").value;
  if (!p || !r || !t) return alert("Enter values");
  if (p<0 || r<0 || t<0) return alert("Enter valid values");

  let si = (p * r * t) / 100;
  document.getElementById("intRes").innerText = `₹${si}`;
}

/* Age */
function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  

  let y = today.getFullYear() - dob.getFullYear();
  let m = today.getMonth() - dob.getMonth();
  let d = today.getDate() - dob.getDate();

  if (d < 0) {
    m--;
    d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y--;
    m += 12;
  }

  document.getElementById("ageRes").innerText =
    `${y} Years ${m} Months ${d} Days`;
}

/* Grade */
function grade() {
  let marks = +document.getElementById("marks").value;
  let total = +document.getElementById("total").value;
  if (!marks || !total) return alert("Enter values");
  if (marks<0 || total<0) return alert("Enter valid values");

  let percent = (marks / total) * 100;
  let g="";
  if(percent>=80)g="O";
  else if(percent>=80)g="A+";
  else if(percent>=70)g="A";
  else if(percent>=60)g="B+";
  else if(percent>=55)g="B";
  else if(percent>=45)g="C";
  else if(percent>=40)g="P(Pass)";
  else if(percent<40)g="F (Fail)";

  document.getElementById("gradeRes").innerText =
    `Percentage: ${percent.toFixed(2)}%  Grade: ${g}`;
}

/* Night Mode */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* Default */
// show("bmi");