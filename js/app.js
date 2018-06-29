function happiness_chart(){
  var today = new Date();
  var happy_x = [];
  var happy_y = [8,3,4,2,9];

  for (i =5; i > 0; --i){
    var date = today.getMonth() + 1 + '/' + (today.getDate() - i);
    happy_x.push(date);
  }

  var options = {
    width: 400,
    height: 300,
    high: 10,
    low: 1,
    showLine: true,
    fullWidth:true,
    axisX: {
      showLabel: true,
      showGrid: true,
      onlyInteger: true,
      labelOffset: {
        x: -9,
        y: 0
      }
    }
  };

  var data = {
    labels: happy_x,
    series: [happy_y]
  };

  var happiness_chart = new Chartist.Line('#happiness', data, options);
  var counter = 0;

  $("#happy-plus-button").on('click', function() {

    var new_happy = Number($("#happiness-label").val());

      try {
        if (new_happy < 1) throw "Please enter a numer 1-10";
        if (new_happy > 10) throw "Please enter a number 1-10";
      }catch(err){
        alert(err);
        return;
      }

        var now = today.getMonth() + 1 + '/' + (today.getDate() + counter);
        happy_x.push(now);
        happy_y.push(new_happy);
        console.log(happy_x);
        console.log(happy_y);
        happiness_chart.update({
          labels: happy_x,
          series: [happy_y]
        });
        counter = counter + 1;

  });

  console.log("fuck");


  $("#happy-minus-button").on('click', function() {
    happy_x.pop();
    happy_y.pop();
    happiness_chart.update({
      labels: happy_x,
      series: [happy_y]
    });
    counter -= 1;
  });
}

// Weight Chart and Update ////////////////////////////////////////////////////////////////////////////////
function weight_chart(){

  var today = new Date();
  var weight_x = [];
  var weight_y = [213, 212, 210, 213, 215];

  for (i =5; i > 0; --i){
    var date = today.getMonth() + 1 + '/' + (today.getDate() - i);
    weight_x.push(date);
  }

  var options = {
    width: 400,
    height: 300,
    high: 220,
    low: 200,
    showLine: true,
    fullWidth:true,
    axisX: {
      showLabel: true,
      showGrid: true,
      onlyInteger: true,
      labelOffset: {
        x: -9,
        y: 0
      }
    }
  };

  var data = {
    labels: weight_x,
    series: [weight_y]
  };

  var weight_chart = Chartist.Line('#weight', data, options);

  var counter = 0;
  $("#weight-plus-button").on('click', function(data) {
    var new_weight = Number($("#weight-label").val());

    try {
      if (new_weight < 0) throw "Please enter a numer 1-10";
      if (new_weight > 400) throw "Please enter a number 1-10";
    }catch(err){
      alert(err);
      return;
    }
    setTimeout(function() {
      var now = today.getMonth() + 1 + '/' + (today.getDate() + counter);
      weight_x.push(now);
      weight_y.push(new_weight);
      console.log(weight_x);
      console.log(weight_y);
      weight_chart.update({
        labels: weight_x,
        series: [weight_y]
      });
      counter = counter + 1;

    }, 50);
  });

  $("#weight-minus-button").on('click', function(data) {
    weight_x.pop();
    weight_y.pop();
    weight_chart.update({
      labels: weight_x,
      series: [weight_y]
    });
    counter -= 1;
  });
}

// Sleep
function sleep_chart(){

  var today = new Date();
  var sleep_x = [];
  var sleep_y = [8,7,2,3,3];

  for (i =5; i > 0; --i){
    var date = today.getMonth() + 1 + '/' + (today.getDate() - i);
    sleep_x.push(date);
  }
  var options = {
    width: 400,
    height: 300,
    high: 10,
    low: 1,
    showLine: true,
    fullWidth:true,
    onlyInteger: true,
    axisX: {
      showLabel: true,
      showGrid: true,
      labelOffset: {
        x: -9,
        y: 0
      }
    }
  };

  var data = {
    labels: sleep_x,
    series: [sleep_y]
  };

  var sleep_chart = Chartist.Line('#sleep', data, options);

  var counter = 0;

  $("#sleep-plus-button").on('click', function() {
    var new_sleep = Number($("#sleep-label").val());

    try {
      if (new_sleep < 1) throw "Please enter a numer 1-10";
      if (new_sleep > 10) throw "Please enter a number 1-10";
    }catch(err){
      alert(err);
      return;
    }
    setTimeout(function() {
      var now = today.getMonth() + 1 + '/' + (today.getDate() + counter);
      sleep_x.push(now);
      sleep_y.push(new_sleep);
      sleep_chart.update({
        labels: sleep_x,
        series: [sleep_y]
      });
      counter = counter + 1;

    }, 50);
  });

  $("#sleep-minus-button").on('click', function(data) {
    sleep_x.pop();
    sleep_y.pop();
    sleep_chart.update({
      labels: sleep_x,
      series: [sleep_y]
    });
    counter -= 1;
  });
}

// Nutrition Chart and Update ////////////////////////////////////////////////////////////////////////////////
function nutrition_chart(){

  var today = new Date();
  var nutrition_x = [];
  var nutrition_y = [2,4,6,8,10];

  for (i =5; i > 0; --i){
    var date = today.getMonth() + 1 + '/' + (today.getDate() - i);
    nutrition_x.push(date);
  }
  var options = {
    width: 400,
    height: 300,
    high: 10,
    low: 1,
    showLine: true,
    fullWidth:true,
    axisX: {
      showLabel: true,
      showGrid: true,
      onlyInteger: true,
      labelOffset: {
        x: -9,
        y: 0
      }
    }
  };

  var data = {
    labels: nutrition_x,
    series: [nutrition_y]
  };

  var nutrition_chart = Chartist.Line('#nutrition', data, options);
  var counter = 0;

  $("#nutrition-plus-button").on('click', function() {
    var new_nutrition = Number($("#nutrition-label").val());

    try {
      if (new_nutrition < 1) throw "Please enter a numer 1-10";
      if (new_nutrition > 10) throw "Please enter a number 1-10";
    }catch(err){
      alert(err);
      return;
    }
    setTimeout(function() {
      var now = today.getMonth() + 1 + '/' + (today.getDate() + counter);
      nutrition_x.push(now);
      nutrition_y.push(new_nutrition);
      nutrition_chart.update({
        labels: nutrition_x,
        series: [nutrition_y]
      });
      counter = counter + 1;

    }, 50);
  });

  $("#nutrition-minus-button").on('click', function(data) {
    nutrition_x.pop();
    nutrition_y.pop();
    nutrition_chart.update({
      labels: nutrition_x,
      series: [nutrition_y]
    });
    counter -= 1;
  });
}
