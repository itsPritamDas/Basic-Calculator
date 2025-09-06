const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");
const modeLabel = document.querySelector(".mode-label");

// using to Toggle light/dark mode
themeSwitch.addEventListener("change", () => 
{
  document.body.classList.toggle("light");
  modeLabel.textContent = document.body.classList.contains("light") ? "Dark Mode" : "Light Mode";
});

// using for Add value to display
function appendValue(value) 
{
  display.value += value;
}

// using for Clear the display
function clearDisplay() 
{
  display.value = "";
}

// using for Remove last character
function backspace() 
{
  display.value = display.value.slice(0, -1);
}

// using for Evaluate expression safely with bracket conversion
function calculate() 
{
  try {
    const safeExpr = display.value
      .replace(/[\[\{]/g, '(')
      .replace(/[\]\}]/g, ')');

    const result = eval(safeExpr);
    if (!isFinite(result)) throw new Error("Math Error");
    display.value = result;
  } catch (error) {
    display.value = "Error";
    setTimeout(() => display.value = "", 1500);
  }
}

//using to  Support keyboard input
document.addEventListener("keydown", (e) => 
{
  const key = e.key;
  if (/[0-9+\-*/().{}\[\].]/.test(key)) 
    {
    appendValue(key);
    } 
  else if (key === "Enter") 
    {
    calculate();
    } 
  else if (key === "Backspace") 
    {
    backspace();
    } 
  else if (key === "Escape") 
    {
    clearDisplay();
    }
});
