import React from 'react'
import {getBubbleSortAnimations,getMergeSortAnimations,getInsertionSortAnimations,getQuickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css'

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array:[],
        };

        this.var=false;
    }
    
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 249; i++) {
          array.push(randomIntFromInterval(5, 555));
        }
        this.setState({array});
    }
    update(){
        const arrayBars = document.getElementsByClassName('array-bar');
        this.resetArray();
        for (let i = 0; i < 249; i++) {
            //const one=this.array[i];
            const barOneStyle = arrayBars[i].style;
            barOneStyle.backgroundColor=SECONDARY_COLOR
        
        }
    }
    render() {
        const {array} = this.state;
    
        return (
            <div className="array-container">
              {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{ backgroundColor: 'red', height: `${value}px`, }}>
                </div>
              ))}
            <div>
            <button disabled={this.var} onClick={() => this.update()} className="btn btn-info m-2">Generate New Array</button>
            <button disabled={this.var} onClick={() => this.bubblesort()} className="btn btn-info m-2">Bubble Sort</button>
            <button disabled={this.var} onClick={() => this.insertionsort()} className="btn btn-info m-2">Insertion Sort</button>
            <button disabled={this.var} onClick={() => this.mergeSort()} className="btn btn-info m-2">Merge Sort</button>
            <button disabled={this.var} onClick={() => this.quicksort()} className="btn btn-info m-2">Quick Sort</button>
            </div>
            
            </div>
        );
    }



    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    bubblesort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const [barOneIdx, barTwoIdx,mode,c] = animations[i];
          const isColorChange = mode === 0;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx,mode,c] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = c === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight,mode] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    insertionsort() {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const [barOneIdx, barTwoIdx,mode,c] = animations[i];
          const isColorChange = mode === 0;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx,mode,c] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = c === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight,mode] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }
    quicksort() {
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const [barOneIdx, barTwoIdx,mode,c] = animations[i];
          const isColorChange = mode === 0;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx,mode,c] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = c === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight,mode] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}