
class Component
{
    notify() {
        this.callback();
    }

    register(callback) {
        this.callback = callback;
    }

    render() {}
}

class Renderer
{
    constructor(component, destination) {
        this.render = component.render.bind(component);
        this.destination = destination;

        component.register(() => {
            return this.listen();
        });

        this.listen();
    }

    listen () {
        this.destination.innerHTML = '';
        this.destination.append(this.render());
    }
} 
  


  const START_TIME = Date.now();
  let msPerSecond =1000;
  let msPerminute = msPerSecond * 60;
  let msPerhour = msPerminute * 60;
class StopWatch extends Component
{
  constructor(){
     super();
     this.newTime = "00:00:00"
     this.interval;
  }
  
  render(){
    return $('<div>').append(
      $('<h1>').html(this.newTime),
      $('<button>').html('Start').on('click',()=>{
                                this.start();
                            }),
      $('<button>').html('Pause').on('click', this.stop),
      $('<button>').html('Reset').on('click', this.reset)
      )[0];
    }

  
  start(){
     setInterval(function(){
     let ms = Date.now() % START_TIME;
     const hours = Math.floor(ms / msPerhour);
     const minutes = Math.floor((ms % msPerhour) / msPerminute);
     const seconds = Math.floor((ms % msPerminute) / msPerSecond);
     const miliSeconds = Math.floor((ms % msPerSecond) /3);
           
      

      // console.log(miliSeconds)


        // elapsedTime++ ;
        //     if(elapsedTime>= 60){
        //       elapsedTime = 0;
        //       minutes++
        //       if(minutes >= 60){
        //         minutes =0;
        //         hours++
        //       }
        let newTime = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
                      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
                      (seconds > 9 ? seconds : "0" + seconds)+ ":" +
                      (miliSeconds)
        $('h1').html(newTime)              
    },200)
  }
  stop(){
      
  }
  reset(){
     // console.log(stopWatch)
    // $(this.newTime).html("00:00:00")

  }

//   timeCount(){
//      (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
//      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
//      (elapsedTime > 9 ? elapsedTime : "0" + elapsedTime)
// }
}