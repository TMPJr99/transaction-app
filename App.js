import React, { Component } from 'react';
import './App.css';
import Top from './components/Top';
import Main from './components/Main';
import NewPartyForm from './components/NewPartyForm';
import RenderFormBtn from './components/RenderFormBtn';
import EditFormBtn from './components/EditFormBtn';
import Middle from './components/Middle';
import BottomImage from './components/BottomImage';
import BottomNav from './components/BottomNav';
import EditForm from './components/EditForm';
import EmailInputForm from './components/EmailInputForm';


class App extends Component {

  state = {
    renderForm: false,
    editForm: false,
    finalBoss: false
  }

  changeToForm = () => {
    this.setState({
      renderForm: !this.state.renderForm ? true : false
    })
  }

  changeToEditForm = () => {
    this.setState({
      editForm: !this.state.editForm ? true : false
    })
  }

  changeToFinalForm = () => {
    this.setState({
      finalBoss: !this.state.finalBoss ? true : false
    })
  }

  formRender = () => {
    if(this.state.renderForm){
      return <div class="body">
        <div class="blur-view">
          <Top/><br/><br/><hr/>
          <NewPartyForm changeToForm={this.changeToForm}/>
          <RenderFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-4" changeToForm={this.changeToForm} btnTxt={this.buttonLabel}/>
        </div>
        <Middle/>
      </div>
    } else if(this.state.editForm){
      if(!this.state.finalBoss){
        return <div class="body">
        <div class="blur-view">
          <Top/><br/><br/><hr/>
          <EmailInputForm changeToFinalForm={this.changeToFinalForm} changeToEditForm={this.changeToEditForm}/>
          <EditFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-5 ml-3" changeToEditForm={this.changeToEditForm} btnTxt={this.editButtonLabel}/>
        </div>
        <Middle/>
      </div>
      }else{
          return <div class="body">
          <div class="blur-view">
            <Top/><br/><br/><hr/>
            <EditForm changeToFinalForm={this.changeToFinalForm} changeToEditForm={this.changeToEditForm}/>
            <EditFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-5 ml-3" changeToEditForm={this.changeToEditForm} btnTxt={this.editButtonLabel}/>
          </div>
          <Middle/>
        </div>
        }
    }else {
      return <div>
      <div class="body text-left">
        <div class="container">
          <Top/>
          <Main/>
          <RenderFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-5 ml-3" changeToForm={this.changeToForm} btnTxt={this.buttonLabel}/>
          <EditFormBtn classes="btn btn-width btn-outline-light z-depth-0 mt-5 ml-3" changeToEditForm={this.changeToEditForm} btnTxt={this.editButtonLabel}/>
        </div>
      </div>
      <Middle/>
      <BottomImage/>
      <BottomNav/>
    </div>
    }
    
  }

  buttonLabel = () => {
    return this.state.renderForm ? "Back" : "Reserve a Table";
  }
  
  editButtonLabel = () => {
    return this.state.editForm ? "Back" : "Edit Reservation";
  }



  render() {
    return (
      <div className="App mt-0 text-center">
        {this.formRender()}
      </div>
    );
  }
}

export default App;
