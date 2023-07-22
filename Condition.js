var marks = 40;
      if (marks >= 80) {
        document.write("A+");
      } else if (marks < 80 && marks >= 70) {
        document.write("A");
      } else if (marks < 70 && marks >= 60) {
        document.write("A-");
      } else if (marks < 60 && marks >= 50) {
        document.write("B");
      } else if (marks < 50 && marks >= 40) {
        document.write("D");
      } else {
        document.write("Fail");
      }