(function(){

    var numOfRows = document.getElementById("numberOfRows");
    var seatsPerRow = document.getElementById("seatsPerRow");
    var submit = document.getElementById("submit");
    var seatMap = document.getElementById("chart");
    var seatList = new Array();


    submit.addEventListener('click', function(){
        seatMap.innerHTML = '';
        let seats = parseInt(seatsPerRow.value);
        let rows = parseInt(numOfRows.value);
        if(valueCheck(seats) && valueCheck(rows)){
            seatList = generateMap(rows, seats);
            console.log(seatList);
        }else{
            alert("please input values between 1 and 100");
        }
    });

    function valueCheck(input){
        if(input <= 100 && input > 0){
            return true;
        }else{
            return false;
        }
    }

    function generateMap(rows, seats){
        let seatArray = new Array();
        for(var y = 0; y < rows; y++){
            for(var x = 0; x < seats; x++){
                seatArray.push([y,x])
                seatMap.innerHTML += buildSeatSVG();
            }
            seatMap.innerHTML += '<br>';
        }
        activateSeats();
        return seatArray;
    }

    function activateSeats(){
        seatList = document.getElementsByTagName('svg');
        
        for(var i = 0; i < seatList.length; i++){
            let selected = false;
            seatList[i].addEventListener('click',function(){
                
                
                if(selected){
                    for(item of this.children){
                        item.style = "fill:white; stroke: black; stroke-width: 3px;";

                    }
                    selected = false;
                    console.log('deselected');
                }else{
                    for(item of this.children){
                        item.style = "fill:lightgreen; stroke: black; stroke-width: 3px;";
                    }
                    selected = true;
                    console.log('selected');
                }
                

        
                console.log('clicked');
            });
            
        }
    }
})();
