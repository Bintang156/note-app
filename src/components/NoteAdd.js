import React from "react";
import PropsTypes from "prop-types";
import { BiBadgeCheck } from "react-icons/bi";
import { LocaleConsumer } from "../contexts/LocaleContext";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return(
    <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
    
      <form className="input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder={locale === 'id' ? 'Judul' : 'Title'}
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className="judul"
        />
        <input
          type="text"
          placeholder={locale === 'id' ? 'Catatan' : 'Note'}
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          className="catatan"
        />
        <button className="button-logout"><BiBadgeCheck type="submit"/></button>
      </form>
    );
  }
}
</LocaleConsumer>
  )


  }
}

NoteInput.propsTypes = {
  addNote: PropsTypes.func.isRequired,
};

export default NoteInput;