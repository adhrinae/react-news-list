import React, { Component } from 'react';
import NewsArticle from './NewsArticle';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let request_url = `https://newsapi.org/v1/articles?source=${nextProps.source}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

    fetch(request_url)
      .then(response => response.json())
      .then(json => {
        this.setState({ articles: json.articles });
      });
  }

  renderArticles() {
    return this.state.articles.map((article, index) => {
      return (
        <NewsArticle key={index} article={article} />
      )
    });
  }
  
  render() {
    const articles = this.renderArticles();
    
    return (
      <div className="news-list">
        {articles}
      </div>
    );
  }
}

export default NewsList;