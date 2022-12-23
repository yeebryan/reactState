import React from 'react';
import AddNew from './pages/AddNew'
import AllRecipe from './pages/AllRecipe'

export default class RecipeBook extends React.Component {

    // if current page is added
    // if current page is listings 
    // make some mock data

    state = {
        page: "list",
        data: [
            {
                id: 1,
                title: "Chicken Rice",
                ingredient: ["rice", "chicken", "ginger", "broth"]
            },
            {
                id: 2,
                title: "Miso Soup",
                ingredient: ["miso", "wakame", "tofu"],
            },
            {
                id: 3,
                title: "Mee Goreng",
                ingredient: ["noodles", "sambal", "seafood", "vegetables"],
            },

        ]
    }

    // function that remembers the visuals
    // remember JSX rendering doesn't support if..else in the return
    // hence we place in a function here

    renderPage(){
        if(this.state.page === "list"){
            return <AllRecipe/>
        }
        else if(this.state.page === "add"){
            return <AddNew/>
        }
    }

    // arrow function that handles the current page
    // updates the state of the current page itself
    // this will eventually affect the rendering of the content due to renderPage
    // param: page
    // list: list all recipes
    // add: Add new recipe
    switchPage = (page) => {
        this.setState({
            page: page
        })
    }



    render(){
        return <React.Fragment>
            <h1>Recipe Book</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#"
            onClick={()=>this.switchPage("List")}
            > List Recipes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={()=>this.switchPage("add")}>Add New</a>
      </li>
    </ul>
  </div>
</nav>
 <div>{this.renderPage()}</div>
        </React.Fragment>
    }
}