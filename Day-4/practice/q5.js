//You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.

var signal = "red";

if (signal == "red") {
    console.log("Stop");
    }
else if (signal == "yellow") {
    console.log("Wait");
    }
else if (signal == "green") {
    console.log("Go");
    }
else {
    console.log("Invalid Signal");
    }