
//For Loop Break Statement In Loop

var i;

for (i = 0; i < 10; i++) {
  if (i === 5 || i === 8) {
    continue;
  }
  document.write(i + "<button>Submit</button> <br>");
}

//For Loop Break Statement In Loop

var i;

for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  document.write(i + "<button>Submit</button> <br>");
}

//While Loop//

var i = 0;
while(i<10){
  document.write(i + "<button>Submit</button> <br>");
  i++
}