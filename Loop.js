var i;

for (i = 0; i < 10; i++) {
  if (i === 5 || i===8) {
    continue;
  }
  document.write(i + "<button>Submit</button> <br>");
}
