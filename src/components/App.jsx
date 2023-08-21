import {Component} from 'react';
import { Feedback } from './Feedback/Feedback';
import {Phonebook} from './Phonebook/Phonebook';

export class App extends Component {

  render () {
    return (
      <div>
        <Feedback />
        <Phonebook/>
      </div>
    );
  }

};
