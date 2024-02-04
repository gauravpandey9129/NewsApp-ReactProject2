import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
   
  
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
        }
    }

   async componentDidMount(){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ee613bef369d4945a28b876a578f6b44&pagesize=${this.props.pagesize}`
        let data= await fetch(url);
        let jdata= await data.json();
        this.setState({loading:false})
        this.setState({articles:jdata.articles,totalResults:jdata.totalResults})

    }
       handlePrevClick=async()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ee613bef369d4945a28b876a578f6b44&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        let data= await fetch(url);
        let jdata= await data.json();
        this.setState({articles:jdata.articles})
  
        this.setState({
         page: this.state.page-1,
         loading:false
        })

       }


        handleNextClick=async()=>{

            if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

            }else{

            
                this.setState({loading:true})
                let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ee613bef369d4945a28b876a578f6b44&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
               let data= await fetch(url);
               let jdata= await data.json();
               this.setState({articles:jdata.articles})
      
               this.setState({
               page: this.state.page+1,
              loading:false
            })
        }
        }


  render() {
    return (
       <div  className="container my-3 mx-4">
          <h2 className="text-center fw-bold bg-warning fst-italic border border-dark"> Top News Of The Day </h2>
            { this.state.loading && <Spinner/>}
          <div className="row">
              {this.state.articles.map((elements)=>{
                 return <div className="col-md-4" key={elements.url}>
                <NewsItems title={elements.title?elements.title.slice(0,45):" "} discription={elements.description?elements.description:" "}  urlImage={elements.urlToImage?elements.urlToImage:"https://images.wsj.net/im-919794/social"} newsurl={elements.url?elements.url:"https://www.wsj.com/real-estate/luxury-homes/100-million-dollar-homes-8ee49b5e"}/>
                </div>
              })}
             
            </div>

        <div className="container d-flex justify-content-between">
            <button  disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevClick}> &larr;Previous</button>
            <button type="button" className="btn btn-dark my-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
       

                
      </div>
    )
  }
}

export default News