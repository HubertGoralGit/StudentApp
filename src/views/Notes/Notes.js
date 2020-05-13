/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
import NoteCard from '../../components/NoteCard/NoteCard';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import NewNoteModal from '../../components/NewNoteModal/NewNoteModal';
import CancelIcon from '../../assets/icons/cancel.svg';

const StyledNotesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 75px 20px 0;

  @media (min-width: ${({ theme }) => theme.resolution.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding: 10px 125px 25px 0;
  }

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding-left: 0;
  }

  @media (min-width: ${({ theme }) => theme.resolution.xl}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 25px 150px 25px 0;
  }
`;

class Notes extends Component {
  state = {
    isNewNoteModalVisible: false,
    icon: addIcon,
  };

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({
      isNewNoteModalVisible: !prevState.isNewNoteModalVisible,
    }));
    if (this.state.isNewNoteModalVisible) {
      this.setState({ icon: addIcon });
    } else {
      this.setState({ icon: CancelIcon });
    }
  };

  render() {
    const { notes } = this.props;
    const { isNewNoteModalVisible, icon } = this.state;

    return (
      <UserPageTemplate pageType="notes">
        <Header>
          <Heading big>Notes</Heading>
        </Header>
        <Input search placeholder="search" />
        <StyledNotesWrapper>
          {notes.map(({ title, content, id }) => (
            <NoteCard id={id} title={title} content={content} itemType="notes" key={id} />
          ))}
        </StyledNotesWrapper>
        <ButtonIcon
          onClick={this.handleNewItemBarToggle}
          icon={icon}
          className="add"
          activeColor="notes"
        />
        <NewNoteModal isVisible={isNewNoteModalVisible} />
      </UserPageTemplate>
    );
  }
}

// eslint-disable-next-line react/no-typos
Notes.propTypes = {
  notes: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
