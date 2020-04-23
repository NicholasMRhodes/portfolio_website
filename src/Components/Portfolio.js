import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var portfoliomessage = this.props.data.portfoliomessage;
      
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var tech1 = 'images/tech/'+projects.tech1;
        var tech1name = projects.tech1name;
        var tech2 = 'images/tech/'+projects.tech2;
        var tech2name = projects.tech2name;
        var tech3 = 'images/tech/'+projects.tech3;
        var tech3name = projects.tech3name;
        var tech4 = 'images/tech/'+projects.tech4;
        var tech4name = projects.tech4name;
        var tech5 = 'images/tech/'+projects.tech5;
        var tech5name = projects.tech5name;
        return  <div key={projects.title}>
                  <div className="row-item">
                    <div className="feature-item-left">
                      <h5>{projects.title}</h5>
                      <p>{projects.description}</p>
                      <div>
                        <img className="techlogo" alt="technology logo" src={tech1} title={tech1name}/>
                        <img className="techlogo" alt="technology logo" src={tech2} title={tech2name}/>
                        <img className="techlogo" alt="technology logo" src={tech3} title={tech3name}/>
                        <img className="techlogo" alt="technology logo" src={tech4} title={tech4name}/>
                        <img className="techlogo" alt="technology logo" src={tech5} title={tech5name}/>
                      </div>
                    </div>
                    <div className="feature-item-right">
                      <a href={projects.url} title={projects.title}>
                        <img className='projpic' alt={projects.title} src={projectImage} />
                      </a>
                    </div>
                  </div>
                </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Recent Work</span></h1>
          </div>
          <div>
            <p className="lead left">{portfoliomessage}</p>
          </div>
        </div>
        <br/>
        <div>
          {projects}
        </div>

      </section>
    );
  }
}

export default Portfolio;
