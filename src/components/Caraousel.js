import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
 
export default class Caraousel extends Component {
    constructor(props){
        super(props)
        this.state={
            isNewyork:false,
            isParis:false,
            isDubai:false
        }

    }
    render() {
        return (
            <div className="container">
            <Carousel className="slider" showThumbs={true}  pause={'hover'} useKeyboardArrows={true}  onChange={()=>this.setState({isNewyork:false,isDubai:false,isParis:false})}>
                <div>
                    <img src="newyork.jpg"  alt="Newyork image"/>
                    <p className="legend text-white font-weight-bold" onClick={()=>{this.setState({isNewyork:true}); window.scrollTo(0,2500);}} >NEWYORK</p>
                </div>
                <div>
                    <img src="paris crop.jpg"  alt="Paris image"/>
                    <p className="legend text-white font-weight-bold" onClick={()=>{this.setState({isParis:true}); window.scrollTo(0,2500);}} >PARIS</p>
                </div>
                <div>
                    <img src="Dubai crop.jpg"  alt="Dubai image"/>
                    <p className="legend text-white font-weight-bold" onClick={()=>{this.setState({isDubai:true}); window.scrollTo(0,2500);}} >DUBAI</p>
                </div>
            </Carousel>
                {this.state.isNewyork && 
                <div className="intro">
                <div>
                <h2>Newyork</h2>
                <p className="description"><b>
                New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.
                 At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and 
                 cultural centers. Its iconic sites include skyscrapers
                 such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</b>
                </p>
        </div> 
        </div>}
            {this.state.isDubai && <div className="intro">
                <div>
                <h2>Dubai</h2>
                <p className="description"><b>
                    Dubai is a city and emirate in the United Arab Emirates known for luxury shopping,
                 ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the 
                 skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music.
                 On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.
                 </b></p>
            </div> 
        </div>}
            {this.state.isParis && <div className="intro">
                <div>
                <h2>Paris</h2>
                <p className="description"><b>
                Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France,
                 with an estimated population of 2,150,271 residents as of 2020, in an area of 105 square kilometres (41 square miles).[1] Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts. The City of Paris is the centre and seat of government of the Île-de-France, 
                or Paris Region, which has an estimated official 2020 population of 12,278,210, or about 18 percent of the population of France.[1]
                </b></p>
        </div> 
        </div>}
        </div>
        );
    }
}
 