import React, { Component } from 'react';

class NewsArticle extends Component {
  render() {
    const article = this.props.article;
    
    return (
      <div className="media">
        <figure className="media-left">
          <p className="image">
            <img src={article.urlToImage} alt="article_img"/>
          </p>
        </figure>

        <div className="media-content">
          <div className="content">
            <p>
              <a href={article.url} target="_blank">
                <strong>{article.title}</strong>
              </a>
              <small><i> by {article.author}</i></small>
              <br/>
              
              {article.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
