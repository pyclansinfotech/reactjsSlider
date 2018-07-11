import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

 
  componentDidMount() {
      window.addEventListener('load', this.handleLoad);
   }
   handleLoad() {
      const completeSlickSlider = document.getElementById('slickSlider')
      const loopOnCompleteSlickSlider = completeSlickSlider.getElementsByTagName('div');
    // gets all descendent of ancestor
    // Now you just need to loop over children

    let i, e, d;
    let decreaseSizeFromActiveToTop = 0;
    let decreaseSizeFromActiveToBottom = 0;
    let extraDiv = 0;
    let countTop = true;
    
    for (i = 0; i < loopOnCompleteSlickSlider.length; i++) {
      let loopClasses = loopOnCompleteSlickSlider[i].className.split(' ')
      if(loopClasses.indexOf('slick-slide') != -1) {
        if(loopClasses.indexOf('slick-current') != -1) {
          countTop = false
        } else {
          if(countTop == true)
          {
            decreaseSizeFromActiveToTop = decreaseSizeFromActiveToTop + 1
          } else {
            decreaseSizeFromActiveToBottom = decreaseSizeFromActiveToBottom + 1
          }
        }
      } else {
        extraDiv = extraDiv+1
      }
    }
    console.log(decreaseSizeFromActiveToTop,'here12',decreaseSizeFromActiveToBottom)
    for(i = 0; i< decreaseSizeFromActiveToBottom; i++) {
      console.log('sdsd',loopOnCompleteSlickSlider[i+decreaseSizeFromActiveToTop+1+extraDiv])
    }
   }
  render() {
    return (
      <div>
       <div id="slickSlider" className="slider slider-nav main">
        <div><p className="verticalSliderText">Confirm or Edit Your Info</p></div>
        <div><p className="verticalSliderText">Add or Edit Profile Media</p></div>
        <div><p className="verticalSliderText">Confirm and Add Unavailable Dates</p></div>
        <div><p className="verticalSliderText">Confirm and Add More Plays</p></div>
        <div><p className="verticalSliderText">Describe Your Plays in Few Words</p></div>
      </div>
      </div>
    );
  }
}


export default App;
