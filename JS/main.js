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
            var s = "<div class='row-container'>";
            for(var x = 0; x < seats; x++){
                seatArray.push([y,x])
                
                s += buildSeatSVG();
                
            }
            s += '</div>';
            seatMap.innerHTML += s;
            seatMap.innerHTML += '<br>';
        }
        for(row of document.getElementsByClassName('row-container')){
            row.style = "max-width: 100%; height: auto;";
            //row.style.width = '100%'
            
            let dimensions = Math.floor(row.clientWidth/row.children.length) + 'px';
      
            for(thing of document.getElementsByClassName('seat')){
                
                thing.style.maxWidth = '50px';
                thing.style.maxHeight = '50px';
                thing.setAttribute('width', dimensions);
                
                thing.setAttribute('height', dimensions);
                
                
                
            }
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
                }else{
                    for(item of this.children){
                        item.style = "fill:#3f3; stroke: black; stroke-width: 3px;";
                    }
                    selected = true;
                }
                

        
            });
            
        }
    }
})();
